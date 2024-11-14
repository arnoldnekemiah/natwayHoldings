import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Freightways</div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#solutions">Digital Solutions</a></li>
        <li><a href="#industry">Your Industry</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
