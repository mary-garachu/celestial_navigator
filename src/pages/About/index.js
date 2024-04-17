import React from 'react';
import Layout from '../../components/Layout';
import mockData from '../../discard/Mock';
import './index.css';

const About = () => {
  return (
    <div className="about-container">
    <Layout/>
    <h1 className="about-title">Discovery: <i>Celestial</i> Insights</h1>
    <div className="about-content">
      {mockData.map((item) => (
        <div key={item.id} className="about-card">
          <img src={item.imageUrl} alt={item.title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
            <div className="more-info">
              <p>{item.moreInfo.details}</p>
              <p>{item.moreInfo.funFact}</p>
            </div>
            <a href={item.link} className="external-link" target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default About