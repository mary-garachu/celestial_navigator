// Home.js
import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/index';
import Header from '../../components/Header/index';
import Hero from '../../components/Hero/index'
import './index.css'
import mockData from '../../Mock';// Import the mock data

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Set mock data
    setCards(mockData);
  }, []);

  return (
    <div>
      <Header/>
      <Hero/>
     <div className="cards-container">
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            moreInfo={card.moreInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
