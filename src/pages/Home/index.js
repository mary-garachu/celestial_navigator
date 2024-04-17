import React, { useState, useEffect } from 'react';
import './index.css';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Card from '../../components/Cards';
import mockData from '../../discard/Mock';
import ImageGrid from '../../components/milkyWay';
import Vision from '../../components/Vision';
import mock from '../../data';
import sectionData from '../../sectionData';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

const Home = () => {
  const { vision } = mock; 
  const [cards, setCards] = useState([]);
  const [ sections, setSections] = useState([]);

  useEffect(() => {
    setCards(mockData);
    setSections(sectionData);
  }, []);

  return (
    <div>
      <Layout />
      <Hero/>
      <div className="home">
      <Vision visionData={vision} />
      <div className="card-container">
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <div className='section-home-title'>
        <h1> Welcome to our Space Exploration Hub </h1>
      </div>
      <div className="section-container">
        {sections.map(section => (
          <Section
            key={section.id}
            title={section.title}
            description={section.description}
            imageUrl={section.imageUrl}
          />
        ))}
      </div>
      <ImageGrid />
      <Footer/>
    </div>
    
    </div>
  );
}

export default Home;