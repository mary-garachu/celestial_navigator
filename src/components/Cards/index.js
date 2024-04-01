// Card.js
import React, { useState } from 'react';
import './index.css' // Import CSS for the Card component

const Card = ({ title, description, imageUrl, moreInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button onClick={toggleModal} className="read-more-btn">
          Read More
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <p>{moreInfo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;