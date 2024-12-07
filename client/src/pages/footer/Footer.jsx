import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3 className="footer-logo">Bubble Breeze</h3>
          <p className="company-description">
            Premium car wash and detailing services providing the highest standards of vehicle care.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-link" aria-label="Youtube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#premium-wash">Premium Wash</a></li>
            <li><a href="#interior-detailing">Interior Detailing</a></li>
            <li><a href="#exterior-detailing">Exterior Detailing</a></li>
            <li><a href="#ceramic-coating">Ceramic Coating</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail size={14} />
              <span>info@bubblebreeze.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={14} />
              <span>123 Wash Street, Clean City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© 2024 Bubble Breeze. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;