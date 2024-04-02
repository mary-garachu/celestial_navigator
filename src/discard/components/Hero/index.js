/* Hero js */
import React, { useState, useEffect } from 'react';
import './index.css';

const Hero = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

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
        setImageDescription(data.explanation);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="day-picture">
        {imageUrl && <img src={imageUrl} alt="NASA Picture of the Day" />}
      </div>
      <div className="astronomy-text" onClick={toggleDescription}>
        <h1 className="big-text">Astronomy image<br/>of the day</h1>
        <button className="learn-more-btn" onClick={toggleDescription}>
          Read More
        </button>
      </div>
      {showDescription && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleDescription}>&times;</span>
            <p>{imageDescription}</p>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Hero;
