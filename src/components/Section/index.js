import React from 'react';
import './index.css';
import { toAbsoluteUrl } from '../../_helpers/utils';

const Section = ( { title, description, imageUrl }) => {
  return (
    <div className='section-container'>
        <div className='section-content'>
            <img src={ toAbsoluteUrl( imageUrl ) }  alt={title} className="section-image" />
            <h3 className="section-title">{title}</h3>
            <p className="section-description">{description}</p>

        </div>
    </div>
  )
}

export default Section