import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTruck, FaWarehouse, FaChartLine, FaLaptopCode,
} from 'react-icons/fa';

const solutions = [
  {
    title: 'Supply Chain Solutions',
    description: "We don't just offer supply chain advisory, we put it into action.",
    icon: FaChartLine,
  },
  {
    title: 'End-to-end Transportation',
    description: 'Expertise from start to finish, total reliability customized for you.',
    icon: FaTruck,
  },
  {
    title: 'Contract Logistics',
    description: 'Supply chain solutions that drive your business forward.',
    icon: FaWarehouse,
  },
  {
    title: 'Digital Solutions',
    description: 'Increase productivity with IT-powered supply chain solutions.',
    icon: FaLaptopCode,
  },
];

const Solutions = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-20 px-5 bg-gray-50"
  >
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Our Solutions
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-blue-600 mb-6">
              <solution.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Solutions;
