import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faMoneyBill, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { addToCart, deleteItem } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

    const dispatch = useDispatch();

    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;

  var totalPrice = cartItems.reduce((x, item) => x + item.price, 0);
  
  function checkoutHandler() {
    if (totalPrice > 0) {
      navigate("/checkoutdetails");
    }
  }

  return (
    <div className="cart-container">
      <div className="cart-row">
        <Navbar />
      </div>
      <div className="cart-row">
        <h1 className="cart-title">Your Cart</h1>
      </div>
      <div className="cart-row">
        <div className="cart-col">
          {cartItems.map((item) => (
            <div className="cart-card">
              <div className="cart-header">
                <h2 className="cart-subtitle">{item.name}</h2>
                <span className="cart-varient">{item.variant}</span>
              </div>
              <div className="cart-body">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-footer">
                <div className="cart-footer-top">
                  <p className="cart-price">
                    Price: {item.quantity} *
                    {item.prices[0][item.variant].toFixed(2)} = $
                    {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="cart-footer-bottom">
                  <div className="cart-footer-bottom-left">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        dispatch(deleteItem(item));
                      }}
                    />
                  </div>
                  <div className="cart-footer-bottom-right">
                    <p>
                      Quantity:
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.variant)
                          );
                        }}
                      />
                      <span className="quantity">{item.quantity}</span>
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.variant)
                          );
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-col">
          <div className="cartTotal">
            <h2 className="totalPrice">
              Total Price: $ {totalPrice.toFixed(2)}
            </h2>
            <button totalPrice={totalPrice} onClick={checkoutHandler}>
              <FontAwesomeIcon icon={faMoneyBill} /> Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart