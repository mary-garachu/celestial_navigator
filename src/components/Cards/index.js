import React, { useState } from 'react';
import './index.css';
import { toAbsoluteUrl } from '../../_helpers/utils';
import Modal from '../Modal';

const Card = ({ title, description, imageUrl, moreInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card">
      <img src={ toAbsoluteUrl( imageUrl ) }  alt={title} className="card-image" />
      <div className="card-content">
        <h3 className='card-title'> {title}</h3>
        <p className="card-description">{description}</p>
        <button onClick= {toggleModal} className="read-more-btn">Read More</button>
        {isModalOpen && <Modal onClose={toggleModal} title={title}>
        <p>{moreInfo}</p>
      </Modal>}
      </div>
    </div>
  );
};

export default Card;
