import React, { useState, useEffect } from 'react';
import './index.css';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Card from '../../components/Cards';
import mockData from '../../discard/Mock';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Set mock data
    setCards(mockData);
  }, []);

  return (
    <div>
      <Layout />
      <Hero/>
      <div className="home">
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
    </div>
    
    </div>
  );
}

export default Home;