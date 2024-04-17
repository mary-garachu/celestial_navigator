import React, { useState, useEffect } from 'react';
import './index.css';

const Hero = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'dEwYN7I7GTGRsWY8Zlc1Zrff5Uploy8oz2kMnPfi';

    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImageUrl(data.url);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      {error && <div>Error: {error}</div>}
      <div className="day-picture">
        {
            imageUrl && 
            // eslint-disable-next-line            
            <img src={imageUrl} alt="NASA Picture of the Day" /> 
        }
      </div>
    </section>
  );
};

export default Hero;
