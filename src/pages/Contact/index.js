import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import partnerData from '../../partners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <><Layout /><div className="portfolio-container">
        <section className="introduction-section">
          <h1>Welcome to Our Portfolio</h1>
          <p>We are a dedicated team with expertise in Software Engineering. Our mission is to deliver high-quality projects and make a positive impact.</p>
        </section>

        <section className="team-member-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {partnerData.map((partner) => (
              <div key={partner.id} className="team-member">
                <img src={partner.imageUrl} alt={partner.title} />
                <div className="member-details">
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                  <div className="social-links">
                    <FontAwesomeIcon icon={faGithub} onClick={() => handleIconClick(partner.github)} />
                    <FontAwesomeIcon icon={faTwitter} onClick={() => handleIconClick(partner.twitter)} />
                    <FontAwesomeIcon icon={faLinkedin} onClick={() => handleIconClick(partner.linkedin)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Current Project:</h2>
          <div className="projects">
            <div className="project">
              <h3>Celestial Navigator</h3>
              <p>The Celestial Navigator, is a web-based platform designed to provide users with an immersive and educational experience exploring the wonders of the universe. It aims to make astronomy accessible to people of all ages and backgrounds.</p>
              <p>Technologies Used: React Framework, CSS, JavaScript</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Feel free to get in touch with us for collaboration opportunities or inquiries.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
    </div></>
  )
}

export default Contact