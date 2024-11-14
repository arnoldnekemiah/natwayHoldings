/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    const element = document.getElementById(path.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white px-5 py-3 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Natway Holdings</Link>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-4">
            <li><button onClick={() => handleNavClick('/services')} className="hover:text-gray-300 transition-colors">Services</button></li>
            <li><button onClick={() => handleNavClick('/solutions')} className="hover:text-gray-300 transition-colors">Digital Solutions</button></li>
            <li><button onClick={() => handleNavClick('/industry')} className="hover:text-gray-300 transition-colors">Your Industry</button></li>
            <li><button onClick={() => handleNavClick('/about')} className="hover:text-gray-300 transition-colors">About Us</button></li>
            <li><button onClick={() => handleNavClick('/contact')} className="hover:text-gray-300 transition-colors">Contact Us</button></li>
          </ul>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden pt-4 space-y-2">
            <li><button onClick={() => handleNavClick('/services')} className="block py-2 hover:text-gray-300 transition-colors">Services</button></li>
            <li><button onClick={() => handleNavClick('/solutions')} className="block py-2 hover:text-gray-300 transition-colors">Digital Solutions</button></li>
            <li><button onClick={() => handleNavClick('/industry')} className="block py-2 hover:text-gray-300 transition-colors">Your Industry</button></li>
            <li><button onClick={() => handleNavClick('/about')} className="block py-2 hover:text-gray-300 transition-colors">About Us</button></li>
            <li><button onClick={() => handleNavClick('/contact')} className="block py-2 hover:text-gray-300 transition-colors">Contact Us</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
