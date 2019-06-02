import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import PageBlocks from './components/PageBlocks/PageBlocks';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <PageBlocks />
      <Footer />
    </div>
  );
}

export default App;
