import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Initialize EmailJS
  init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS user ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_3clznej', 'template_uy9hwga', formData)
      .then((response) => {
        console.log('Message sent successfully', response);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Failed to send message', error);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
