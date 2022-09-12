import React, { useState } from 'react';
import Quick from '../quick/Quick';
import './pizza.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions.js';

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1); // 1 is default
    const [variant, setVarient] = useState('small'); // small is default
    //const [open, setOpen] = useState(false); // false is default

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch();

  function addToCartHandler() {
      dispatch(addToCart(pizza, quantity, variant));
    }

  return (
    <div className="p-card" key={pizza._id}>
      <div className="p-card-header">
        <img className="p-image" src={pizza.image} alt={pizza.name} />
        <h2 className="p-title" onClick={handleShow}>
          {pizza.name}
        </h2>
      </div>
      <div className="p-card-body">
        <div className="p-left">
          <span className="varients">Varients</span>
          <div className="p-select">
            <select
              value={variant}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((varient) => (
                <option value={varient}>{varient}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-right">
          <span className="varients">Quantity</span>
          <div className="p-select quantity">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(5).keys()].map((x, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="p-card-footer">
        <div className="p-f-left">
          <p className="price">
            <span>Price:</span> $
            {(pizza.prices[0][variant] * quantity).toFixed(2)}
          </p>
          {/* default price for small pizza */}
        </div>
        <div className="p-f-right">
          <button onClick={addToCartHandler} className="btn">
            Add
          </button>
        </div>
      </div>
      {/* For the PopUp Modal or Quick View */}

      {show && <Quick handleClose={handleClose} pizza={pizza} />}
    </div>
  );
};;

export default Pizza