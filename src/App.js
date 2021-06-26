import React from 'react';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Arena from './components/Arena';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Arena />
    </div>
  );
}

export default App;
