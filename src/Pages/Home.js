// Home.js
import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
import Card from '../components/Cards';
import './Home.css';
import mockData from '../Mock';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      setCards(mockData);

  }, []);

  return (
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
  );
};

export default Home;
