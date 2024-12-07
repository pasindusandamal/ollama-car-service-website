import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any questions or concerns</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p>Feel free to contact us through any of these channels</p>
          
          <div className="info-cards">
            <div className="info-card">
              <Phone className="info-icon" />
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>

            <div className="info-card">
              <Mail className="info-icon" />
              <h3>Email</h3>
              <p>info@bubblebreeze.com</p>
              <p>support@bubblebreeze.com</p>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Location</h3>
              <p>123 Wash Street</p>
              <p>Clean City, ST 12345</p>
            </div>

            <div className="info-card">
              <Clock className="info-icon" />
              <h3>Business Hours</h3>
              <p>Mon-Sat: 8:00 AM - 7:00 PM</p>
              <p>Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1638123073372!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;