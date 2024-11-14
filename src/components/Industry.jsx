import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ecommerce from '../assets/ecommerce.jpg';
import manufacturing from '../assets/manufacturing_transport.jpg';
import healthcare from '../assets/medical_supplies.jpg';
import technology from '../assets/tech_logistics.jpg';

const industries = [
  {
    title: 'Retail & E-commerce',
    description: 'Streamlined logistics solutions for modern retail',
    image: ecommerce,
  },
  {
    title: 'Manufacturing',
    description: 'Optimized supply chain for manufacturing excellence',
    image: manufacturing,
  },
  {
    title: 'Healthcare',
    description: 'Specialized logistics for medical supplies',
    image: healthcare,
  },
  {
    title: 'Technology',
    description: 'Advanced solutions for tech industry logistics',
    image: technology,
  },
];

const Industry = () => {
  // Preload images when component mounts
  useEffect(() => {
    industries.forEach((industry) => {
      const img = new Image();
      img.src = industry.image;
    });
  }, []);

  return (
    <div className="py-16 px-5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-64 object-cover"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x300';
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-60"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-sm">{industry.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industry;
