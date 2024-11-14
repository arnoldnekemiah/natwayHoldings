/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => (
  <div className="py-16 px-5 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2" id="name-label">Name</label>
              <input
                type="text"
                id="name"
                aria-labelledby="name-label"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Offices</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Headquarters</h4>
              <p className="text-gray-600">
                123 Business Street
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <p className="text-gray-600">
                Phone: (555) 123-4567
                <br />
                Email: contact@natway.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
