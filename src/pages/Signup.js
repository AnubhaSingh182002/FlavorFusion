import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your CSS file for styling

function Signup() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, set loggedIn to true if login is successful
    setLoggedIn(true);
    // Redirect to home page
    navigate('/Login');
  };

  return (
    <div className="signup-container" style={{ fontFamily: 'serif' }}> {/* Inline styling for font family */}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-signup">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
