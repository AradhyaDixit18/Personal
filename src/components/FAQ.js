import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    { question: 'What are the visiting hours?', answer: 'Visiting hours are from 10 AM to 8 PM.' },
    { question: 'Do you have an emergency room?', answer: 'Yes, we have a 24/7 emergency room.' },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
