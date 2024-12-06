import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Premium Wash', href: '#premium-wash' },
    { name: 'Interior Detailing', href: '#interior-detailing' },
    { name: 'Ceramic Coating', href: '#ceramic-coating' },
    { name: 'Paint Protection', href: '#paint-protection' },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <a href="/" className="logo">
            Bubble Breeze
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <div className="menu-items">
            <div 
              className="menu-item has-dropdown"
              onMouseEnter={() => setActiveDropdown(0)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="menu-item-content">
                Services <ChevronDown className="dropdown-icon" />
              </span>
              <div className={`dropdown-menu ${activeDropdown === 0 ? 'show' : ''}`}>
                {services.map((service, index) => (
                  <a key={index} href={service.href} className="dropdown-item">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#about" className="menu-item">
              <span className="menu-item-content">About</span>
            </a>
            <a href="#contact" className="menu-item">
              <span className="menu-item-content">Contact</span>
            </a>
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="toggle-icon" />
          ) : (
            <Menu className="toggle-icon" />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile-menu-items">
            <div className="mobile-dropdown">
              <div 
                className="mobile-menu-item"
                onClick={() => toggleDropdown(0)}
              >
                <span className="mobile-menu-item-content">
                  Services
                  <ChevronDown className={`mobile-dropdown-icon ${activeDropdown === 0 ? 'rotate' : ''}`} />
                </span>
              </div>
              <div className={`mobile-dropdown-menu ${activeDropdown === 0 ? 'show' : ''}`}>
                {services.map((service, index) => (
                  <a key={index} href={service.href} className="mobile-dropdown-item">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#about" className="mobile-menu-item">About</a>
            <a href="#contact" className="mobile-menu-item">Contact</a>
            <button className="book-now-btn mobile">Book Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;