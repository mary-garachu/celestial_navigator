// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { toAbsoluteUrl } from '../../_helpers/utils';

const LandingPage = () => {
  const heroImage = toAbsoluteUrl('/Assets/logos/icon6.png');
  return (
    <div className="landing-page">
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Celestial Navigator</h1>
          <p>Your guide to exploring the cosmos</p>
          <Link to="/home" className="cta-button">Get Started</Link>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Discover</h2>
          <p>Explore the wonders of the universe</p>
        </div>
        <div className="feature">
          <h2>Learn</h2>
          <p>Gain knowledge about celestial bodies</p>
        </div>
        <div className="feature">
          <h2>Connect</h2>
          <p>Join a community of space enthusiasts</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
