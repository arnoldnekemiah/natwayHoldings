import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industry from './components/Industry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const MainContent = () => {
  const location = useLocation();

  React.useEffect(() => {
    // Scroll to the section if it's in the URL
    if (location.pathname !== '/') {
      const sectionId = location.pathname.slice(1); // Remove the leading slash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="solutions"><Solutions /></div>
      <div id="industry"><Industry /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/*" element={<MainContent />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
