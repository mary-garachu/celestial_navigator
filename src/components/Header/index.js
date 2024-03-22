import React, { useState } from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils';
import './index.css';

const Header = () => {
  const WorldLogo = toAbsoluteUrl('/Assets/logos/WorldLogo.jpg');
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  // Function to handle the search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <header className='header group'>
      <div className='explore'>
        <button onClick={toggleModal} className="explore-btn">Explore</button>
      </div>
      <div className="logo">
        <img src={WorldLogo} alt="World Logo" />
      </div>
      <h1>
        <a href='index.js'>Celestial Navigator</a>
      </h1>
      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
    </header>
  );
};
export default Header;