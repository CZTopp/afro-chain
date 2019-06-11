import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import PageBlocks from './components/PageBlocks/PageBlocks';
import Footer from './components/Footer/Footer';
import DataCenter from './components/DataCenter/DataCenter';

function App() {
  return (
    <div className="App">
      <Header />
      <DataCenter/>
      <PageBlocks />
      <Footer />
    </div>
  );
}

export default App;
