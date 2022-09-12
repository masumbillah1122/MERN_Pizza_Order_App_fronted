import React from 'react';
import './quick.css';

const Quick = ({ handleClose, pizza }) => {
  return (
    <div className="quick-container">
      <div className="quick-row">
        <div className="quick-col">
          <h2 className="quick-title">{pizza.name}</h2>
          <span className="quick-category">{pizza.category}</span>
        </div>
        <div className="quick-col">
          <img src={pizza.image} alt={pizza.name} />
        </div>
              
        <div className="quick-col">
          <p>{pizza.desc}</p>
        </div>
      </div>

      <button className="close" onClick={handleClose}>Close</button>
    </div>
  );
};

export default Quick
