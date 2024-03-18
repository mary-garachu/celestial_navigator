import React from 'react';
import WorldLogo from '../Assets/logos/WorldLogo.jpg'
import './Header.css';


const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src={WorldLogo} alt="World Logo" />
      </div>
      <h1>Celestial Navigator</h1>
    </header>
  );
};

export default Header;