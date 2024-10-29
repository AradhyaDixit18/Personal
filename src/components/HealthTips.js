import React from 'react';
import './HealthTips.css';

const HealthTips = () => {
  const tips = [
    'Stay hydrated and drink plenty of water.',
    'Eat a balanced diet with lots of fruits and vegetables.',
    'Exercise regularly for better health.',
  ];

  return (
    <section className="health-tips">
      <h2>Health Tips</h2>
      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>
  );
};

export default HealthTips;
