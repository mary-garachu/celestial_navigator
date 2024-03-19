// Home.js
import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
import Card from '../components/Cards';
import './Home.css';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          title: "Title 1",
          description: "This is a description for item 1.",
          imageUrl: process.env.PUBLIC_URL + '../Assets/images/planet1.jpg',
        },
        {
          id: 2,
          title: "Title 2",
          description: "This is a description for item 2.",
          imageUrl: process.env.PUBLIC_URL + '../Assets/images/planet2.jpg' ,
        },
        {
          id: 3,
          title: "Title 3",
          description: "This is a description for item 3.",
          imageUrl: process.env.PUBLIC_URL + '../Assets/images/planet3.jpg' ,
        },
        // Add more items as needed
      ];

      setCards(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
