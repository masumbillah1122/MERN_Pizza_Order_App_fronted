import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { placeOrder } from './../actions/orderActions.js';

const Checkout = () => {

    const userState = useSelector(state => state.loginUserReducer);
    const {currentUser} = userState;

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [shippingAddress, setShippingAddress] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function orderHandler() {
      if (name === "" || email === "") {
        alert("Field is empty!");
      } else {
        const { data } = axios.post("/api/orders/placeorders", {
          name: name,
          email: email
        });
        
        localStorage.setItem(
          "shippingAddress",
          JSON.stringify(shippingAddress)
        );

        console.log(data);
        dispatch(placeOrder(data));
        navigate("/orders");
      }
    }


  return (
    <div className="form-container">
      <Navbar />
      <div className="form-row">
        <div className="form-col">
          <div className="form">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
            />
            <input
              type="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />
            <textarea
              name="address"
              required
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Address"
              id=""
              cols="30"
              rows="10"></textarea>

            <button onClick={orderHandler} className="form-btn">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout
