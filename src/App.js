import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<Home />} />  
             <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />

          <Route path="*" element={<Pagenotfound />} />  
        </Routes>
      </Router>// Signup.js
)}

export default App;