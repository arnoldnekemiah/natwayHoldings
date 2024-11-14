import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => (
  <div className="relative bg-black text-white py-32 px-5 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-90" />

    {/* Animated background dots */}
    <div className="absolute inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 opacity-20">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={Hero.id}
          className="w-2 h-2 bg-blue-400 rounded-full"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.02 }}
        />
      ))}
    </div>

    <div className="relative container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Delivering on your expectations
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-3xl mb-6 text-blue-400"
      >
        Natway Holdings
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
      >
        We listen to our partners, understand their unique requirements,
        and craft solutions that deliver results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-6 justify-center"
      >
        <button
          type="button"
          className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          Learn More
          <BsArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
        <button
          type="button"
          className="group border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition-all duration-300"
        >
          Contact Us
        </button>
      </motion.div>
    </div>
  </div>
);

export default Hero;
