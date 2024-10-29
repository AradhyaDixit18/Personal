import React from 'react';
import './Navbar.css';

const Navbar = ({ aboutRef, servicesRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <h1>Jeevaas Hospital</h1>
      <ul>
        <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
        <li><button onClick={() => scrollToSection(servicesRef)}>Services</button></li>
        <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
