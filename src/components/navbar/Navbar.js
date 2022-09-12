import React from 'react';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import cartReducer from './../../reducers/cartReducer';
import { logout } from '../../actions/userActions';

const Navbar = () => {
  
  

  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  return (
    <div className="n-navbar">
      <div className="n-row">
        <div className="n-col">
          <a href="/" className="n-logo">
            Masum Haque
          </a>
        </div>
        <div className="n-col">
          {currentUser ? (
            <>
              <a href="#">{currentUser.name}</a>
              <a href="/orders">Orders</a>
              <a href="#" onClick={() => {dispatch(logout())}}>
                Logout
              </a>
            </>
          ) : (
            <a href="/login">Login</a>
          )}

          <a href="/cart">
            Cart <span className="badge">{cartState.cartItems.length}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
