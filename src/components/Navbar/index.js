// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../_helpers/utils';
import './index.css';

const Navbar = () => {
    const WorldLogo = toAbsoluteUrl('/Assets/logos/WorldLogo.png');
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={WorldLogo} alt="World Logo" />
        <h1> Celestial Navigator </h1>
      </div>
      <div className="navbar-right">
        <Link to="/">LandingPage</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
