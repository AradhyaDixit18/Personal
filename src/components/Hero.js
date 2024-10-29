import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-in" id="hero">

      <h2>Welcome to Jeevaas Hospital</h2>
      <p>Your health is our priority. We provide the best care with compassion.</p>
      <button className="hero-btn" onClick={() => window.location.href = 'https://jeevaashospital.netlify.app'}>Book Now</button>
    </section>
  );
};

export default Hero;
