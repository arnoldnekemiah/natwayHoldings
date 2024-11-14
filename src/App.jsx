import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industry from './components/Industry';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Industry />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
