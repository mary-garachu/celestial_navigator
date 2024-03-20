import React from 'react'
import './index.css'

const Modal = ({ onClose, title, children }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  };

export default Modal
