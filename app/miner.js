const Wallet = require('../wallet');
const Transaction = require('../wallet/transaction');

class Miner {

    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    /**
     * grabs transactions from pool
     * create a block out of those transactions
     * tell p2pserver to sync chains including new block
     * tell pool to clear transaction
     */
    mine() {
        //include reward for miner
        const validTransactions = this.transactionPool.validTransactions();
        validTransactions.push(
            Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet())
        );
         //create o block consisting of the valid transactions
        const block = this.blockchain.addBlock(validTransactions);

        //synchronize chains in the oeer to peer server
         this.p2pServer.syncChains();
        //clear the pool
        this.transactionPool.clear();
        //broadcast to every miner to clear pool
        this.p2pServer.broadcastClearTransactions();

        return block;
    }
}
module.exports = Miner;
