import React from 'react';

const About = () => (
  <div className="py-16 px-5 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">About Natway Holdings</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://placehold.co/600x400"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-600 mb-6">
            Founded in 2010, Natway Holdings has been at the forefront of supply chain innovation
            and logistics excellence. We&apos;ve grown from a small local operation to a global
            leader in supply chain solutions.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
