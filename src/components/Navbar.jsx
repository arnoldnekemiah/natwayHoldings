import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-5 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Natway Holdings</div>
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

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-4">
            <li><a href="#services" className="hover:text-gray-300 transition-colors">Services</a></li>
            <li><a href="#solutions" className="hover:text-gray-300 transition-colors">Digital Solutions</a></li>
            <li><a href="#industry" className="hover:text-gray-300 transition-colors">Your Industry</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden pt-4 space-y-2">
            <li><a href="#services" className="block py-2 hover:text-gray-300 transition-colors">Services</a></li>
            <li><a href="#solutions" className="block py-2 hover:text-gray-300 transition-colors">Digital Solutions</a></li>
            <li><a href="#industry" className="block py-2 hover:text-gray-300 transition-colors">Your Industry</a></li>
            <li><a href="#about" className="block py-2 hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="#contact" className="block py-2 hover:text-gray-300 transition-colors">Contact Us</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
