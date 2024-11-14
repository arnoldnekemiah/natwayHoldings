import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white py-8 px-5">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Natway Holdings</h3>
          <p className="text-gray-300">
            Delivering innovative solutions for your business needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-gray-300 transition-colors">Services</a></li>
            <li><a href="#solutions" className="hover:text-gray-300 transition-colors">Digital Solutions</a></li>
            <li><a href="#industry" className="hover:text-gray-300 transition-colors">Your Industry</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>123 Business Street</li>
            <li>New York, NY 10001</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: contact@natway.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#linkedin" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            <a href="#twitter" className="hover:text-gray-300 transition-colors">Twitter</a>
            <a href="#facebook" className="hover:text-gray-300 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Natway Holdings. All Rights Reserved.</p>
          <ul className="flex gap-4">
            <li><a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
