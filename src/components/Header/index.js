import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils';
import './index.css';


const Header = () => {
  const WorldLogo = toAbsoluteUrl('/Assets/logos/WorldLogo.png');
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