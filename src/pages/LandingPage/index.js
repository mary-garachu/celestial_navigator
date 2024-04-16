// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { toAbsoluteUrl } from '../../_helpers/utils';

const LandingPage = () => {
  const heroImage = toAbsoluteUrl('/Assets/logos/icon6.png');
  const githubLink = "https://github.com/mary-garachu/celestial_navigator";
  const teamMembers = [
    {
      name: "Mary Muthoni",
      linkedin: "https://www.linkedin.com/in/mary-muthoni-2330b5183/",
      github: "https://github.com/mary-garachu",
      twitter: "https://twitter.com/johndoe"
    },
    {
      name: "John Mburu",
      linkedin: "https://www.linkedin.com/in/john-mburu-7a63571a2/",
      github: "https://github.com/mburuxx",
      twitter: "https://twitter.com/mburuxx"
    },
  ];

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
      
      {/* About Section */}
      <section className="about">
        <h2>About</h2>
        <p>we're a team of passionate students dedicated to leveraging our skills and knowledge to explore the vast realms of the cosmos. With each project, we embark on a journey of discovery, pushing the boundaries of our abilities while continuously learning and growing. Our mission is not just to create innovative solutions but also to cultivate a culture of lifelong learning and collaboration. Through hands-on experience and a commitment to excellence, we strive to make meaningful contributions to the field of celestial navigation. Join us as we navigate the stars and unlock the mysteries of the universe, one project at a time."</p>
        <p>Timeline: This project was finished wit5hin 3 weeks.</p>
        <p>Portfolio Project for Holberton School - <a href={githubLink}>GitHub Repository</a></p>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <ul>
                <li><a href={member.linkedin}>LinkedIn</a></li>
                <li><a href={member.github}>GitHub</a></li>
                <li><a href={member.twitter}>Twitter</a></li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
