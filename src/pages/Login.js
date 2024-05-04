import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() { 
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="login-container" style={{ fontFamily: 'serif' }}> {/* Inline styling for font family */}
      <h2>LOGIN</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
