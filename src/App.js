import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [earthImage, setEarthImage] = useState(null);

  useEffect(() => {
    const fetchEarthImage = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: 'dEwYN7I7GTGRsWY8Zlc1Zrff5Uploy8oz2kMnPfi',
          },
        });

        /* The NASA API returns the URL of the Earth image */
        setEarthImage(response.data.url);
      } catch (error) {
        console.error('Error fetching Earth image:', error);
      }
    };

    fetchEarthImage();
  }, []);

  return (
    <div className="App">
      {/* Logo and name section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-name">Celestial Navigator</h1>
      </div>
      <h1 className="header-text">Welcome to our app!</h1>

      {/* Container for 3D image of the Earth */}
      <div className="earth-container">
        {earthImage && <img src={earthImage} alt="Earth" className="earth-image" />}
      </div>
    </div>
  );
}

export default App;
