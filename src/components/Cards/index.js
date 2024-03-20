// Card.js
import React from 'react';
import './index.css';
import { toAbsoluteUrl } from '../../_helpers/utils';

const Card = ({ title, description, imageUrl }) => {
  // Placeholder for "Read More" button action
  const onReadMore = () => {
    alert("Read more clicked!");
  };

  return (
    <div className="card">
      <img src={ toAbsoluteUrl( imageUrl ) }  alt={title} className="card-image" />
      <div className="card-content">
        <h3 className='card-title'> {title}</h3>
        <p className="card-description">{description}</p>
        <button onClick={onReadMore} className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default Card;
