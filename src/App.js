import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import HealthTips from './components/HealthTips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <Testimonials />
      <FAQ />
      <HealthTips />
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  );
};

export default App;
