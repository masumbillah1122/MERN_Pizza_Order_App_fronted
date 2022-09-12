import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/userActions';

const Login = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
          window.location.href = "/"; //if isset user than reload to home page
        } 
    }, []);

    function loginHandler() {
           const users = {
             email,
             password,
           };
           console.log(users);
           dispatch(login(users));
           navigate("/");
    }

  return (
    <div className="form-container">
      <Navbar />
      <div className="form-row">
        <div className="form-col">
          <div className="form">
            <input
              type="mail"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-btn" onClick={loginHandler}>
              Login
            </button>
            <a href="/register" className='form-other-link'>For Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login