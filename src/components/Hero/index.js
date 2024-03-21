// Hero.js
import React from 'react';
import './index.css'; // Import your Hero component CSS file for styling

const Hero = ({ imageUrl }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="hero" style={divStyle}>
      {/* You can add any content you want overlaid on top of the background */}
    </div>
  );
};

export default Hero;
