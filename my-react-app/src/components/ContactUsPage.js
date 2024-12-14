import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://127.0.0.1:8000//api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header text-center">
        <h1 className="text-4xl font-bold text-red-600">Get in Touch with Elevate IQ</h1>
        <p className="text-lg text-gray-700 mt-4">
          Have a question about our services? Use the form below to reach out to us.
          We’ll get back to you within 24 hours!
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
          <p className="status-message">{status}</p>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <h2 className="text-2xl font-bold text-red-600">Contact Details</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:elevateiqtutor@gmail.com">elevateiqtutor@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+16475724372">647-572-4372</a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a href="https://www.instagram.com/aman_sa02?igsh=MTFrMGttdnN5dGV5eg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              elevateiq_tutoring
            </a>
          </p>
          <p>
            <strong>TikTok:</strong>{' '}
            <a href="https://www.tiktok.com/@elevate.tutor?_t=8rcG7Woh7Ad&_r=1" target="_blank" rel="noopener noreferrer">
              elevate.tutor
            </a>
          </p>
          <p>
            <strong>YouTube:</strong> Coming Soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
