import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { toAbsoluteUrl } from '../../_helpers/utils';
import './index.css'; // Import CSS file for styling

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={ toAbsoluteUrl( imageUrl ) }  alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link to="/about" className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
