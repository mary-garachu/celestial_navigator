import React from 'react';
import './index.css'
import { toAbsoluteUrl } from '../../_helpers/utils';

const Partner = ({ title, description, imageUrl }) => {
  return (
    <div className="members">
        <div className='member'>
            <img src={ toAbsoluteUrl( imageUrl ) }  alt={title} className="member-image" />
            <div className="member-info">
                <h3 className="member-title">{ title} </h3>
                <p className="member-description">{ description }</p>
            </div>
        </div>
</div>

  )
}

export default Partner;