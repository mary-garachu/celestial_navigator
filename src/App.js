import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { toAbsoluteUrl } from './_helpers/utils';
import Home from './Pages/Home/index';
import Contact from './Pages/Contact/index';
import LandingPage from './Pages/Landing/index';
import About from './Pages/About/index';


function App() {
  // const imageUrl = toAbsoluteUrl('/Assets/images/universe4.jpg');
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
