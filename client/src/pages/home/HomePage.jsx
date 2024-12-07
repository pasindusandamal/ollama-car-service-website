import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import car_wash_img from '../../assets/images/car_wash_img.jpg';
import './HomePage.css';
import Footer from '../footer/Footer';
import ContacctPage from '../contact/ContactPage';
import ServicesPage from '../service/ServicesPage';
import ChatBot from '../../components/chatbot/ChatBot';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      image: "/api/placeholder/400/320",
      title: "Premium Hand Wash",
      description: "Expert hand washing service with premium products",
      price: "$29.99"
    },
    {
      image: "/api/placeholder/400/320",
      title: "Interior Detailing",
      description: "Complete interior cleaning and sanitization",
      price: "$89.99"
    },
    {
      image: "/api/placeholder/400/320",
      title: "Ceramic Coating",
      description: "Professional ceramic coating for lasting protection",
      price: "$299.99"
    }
  ];

  return (
    <div>
      {/* Navbar */}
   <Navbar/>

      {/* Hero Section */}
      <div className="hero-container">
        <img 
          src={car_wash_img}
          alt="Luxury car wash"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Experience Premium Car Care</h1>
          <p className="text-xl mb-8">
            Professional detailing services for the most discerning clients
          </p>
          <button className="btn-primary">Schedule Service</button>
        </div>
      </div>

      {/* Services Section */}
     <ServicesPage/>

     <ChatBot/>

      {/* Contact Section */}
     <ContacctPage/>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default HomePage;