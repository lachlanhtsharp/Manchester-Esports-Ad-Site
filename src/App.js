import React from 'react';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Arena from './components/Arena';
import GamingRigs from './components/GamingRigs';
import Scholarships from './components/Scholarships';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Arena />
      <GamingRigs />
      <Scholarships />
    </div>
  );
}

export default App;
