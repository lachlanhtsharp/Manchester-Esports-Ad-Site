import React from 'react';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Arena from './components/Arena';
import GamingRigs from './components/GamingRigs';
import Scholarships from './components/Scholarships';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {


  return (
    <div className="App">
      <Header />
      <ContactUs />
      <Home />
      <Arena />
      <GamingRigs />
      <Scholarships />
      <Footer />
    </div>
  );
}

export default App;
