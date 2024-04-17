import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.css';

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      <p className="footer-text">© 2024. Celestial Navigator. All rights reserved.</p>
      {/*
      <div className="footer-icons">
        <FontAwesomeIcon icon={faGithub} onClick={() => handleIconClick("https://www.linkedin.com/in/mary-muthoni-2330b5183/")} />
        <FontAwesomeIcon icon={faGithub} onClick={() => handleIconClick("https://www.linkedin.com/in/mary-muthoni-2330b5183/")} />
        <FontAwesomeIcon icon={faTwitter} onClick={() => handleIconClick("https://twitter.com/your-twitter-account")} />
        <FontAwesomeIcon icon={faLinkedin} onClick={() => handleIconClick("https://www.linkedin.com/in/mary-muthoni-2330b5183/")} />
      </div>
  */}
    </footer>
  );
};

export default Footer;
