const search = (req, res) => {
    return fetch(`api/blocks`, {
        accept: "application/json"
    })
    .then(checkStatus)
    .then(res);
};

const checkStatus = (res) => {
    if(res.status >= 200 && res.status > 300) {
        return res;
    }
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.res = res;
    console.log(error);
    throw error;
};
const parseJSON = (res) =>{
    return res.json();
}
const Client = { search };
export default Client;