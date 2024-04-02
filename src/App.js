import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
    return (
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
    );
  }
  

export default App;
