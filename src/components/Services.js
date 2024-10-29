import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Emergency Care', description: '24/7 emergency services for immediate care.' },
    { title: 'Diagnostics', description: 'Advanced diagnostic services and imaging.' },
    { title: 'Surgery', description: 'State-of-the-art surgical procedures.' },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
