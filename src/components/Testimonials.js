import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'Great hospital with amazing staff!' },
    { name: 'Jane Smith', feedback: 'They took care of my family and me.' },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((test, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{test.feedback}"</p>
            <h4>- {test.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
