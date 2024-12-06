import React, { useState } from 'react';
import { 
  Check, 
  Clock, 
  Shield, 
  Sparkles, 
  Car, 
  Droplet, 
  ShieldCheck,
  Paintbrush 
} from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Premium Hand Wash',
      description: 'Thorough hand washing service using premium cleaning products and microfiber materials.',
      price: '$29.99',
      duration: '45 mins',
      category: 'wash',
      icon: <Droplet className="service-icon" />,
      features: [
        'Exterior hand wash',
        'Wheel cleaning',
        'Tire dressing',
        'Windows cleaning',
        'Hand drying'
      ]
    },
    {
      id: 2,
      title: 'Interior Detailing',
      description: 'Complete interior cleaning and sanitization for a fresh and pristine cabin.',
      price: '$89.99',
      duration: '2 hours',
      category: 'detailing',
      icon: <Car className="service-icon" />,
      features: [
        'Vacuum and dust removal',
        'Upholstery cleaning',
        'Dashboard treatment',
        'Glass cleaning',
        'Sanitization'
      ]
    },
    {
      id: 3,
      title: 'Ceramic Coating',
      description: 'Long-lasting ceramic coating for ultimate paint protection and shine.',
      price: '$499.99',
      duration: '6-8 hours',
      category: 'protection',
      icon: <Shield className="service-icon" />,
      features: [
        'Paint correction',
        'Surface preparation',
        'Ceramic coating application',
        '5-year protection',
        'Hydrophobic effect'
      ]
    },
    {
      id: 4,
      title: 'Paint Correction',
      description: 'Professional paint correction to remove scratches and swirl marks.',
      price: '$299.99',
      duration: '4-5 hours',
      category: 'detailing',
      icon: <Paintbrush className="service-icon" />,
      features: [
        'Scratch removal',
        'Swirl mark elimination',
        'Paint restoration',
        'High-gloss finish',
        'Paint sealant'
      ]
    },
    {
      id: 5,
      title: 'Express Detail',
      description: 'Quick but thorough interior and exterior cleaning service.',
      price: '$49.99',
      duration: '1 hour',
      category: 'wash',
      icon: <Sparkles className="service-icon" />,
      features: [
        'Express wash',
        'Quick interior cleanup',
        'Tire dressing',
        'Windows cleaning',
        'Air freshener'
      ]
    },
    {
      id: 6,
      title: 'Paint Protection Film',
      description: 'Premium PPF installation for ultimate paint protection.',
      price: '$899.99',
      duration: '8-10 hours',
      category: 'protection',
      icon: <ShieldCheck className="service-icon" />,
      features: [
        'Full front PPF',
        'Self-healing film',
        '10-year warranty',
        'Impact protection',
        'UV protection'
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Professional car care services for every need</p>
      </div>

      {/* Category Tabs */}
      <div className="services-container">
        <div className="category-tabs">
          <button 
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button 
            className={`tab-button ${activeTab === 'wash' ? 'active' : ''}`}
            onClick={() => setActiveTab('wash')}
          >
            Car Wash
          </button>
          <button 
            className={`tab-button ${activeTab === 'detailing' ? 'active' : ''}`}
            onClick={() => setActiveTab('detailing')}
          >
            Detailing
          </button>
          <button 
            className={`tab-button ${activeTab === 'protection' ? 'active' : ''}`}
            onClick={() => setActiveTab('protection')}
          >
            Protection
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-header">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-details">
                <div className="service-price">
                  <span className="price">{service.price}</span>
                  <div className="duration">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="book-button">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Shield size={32} />
            <h3>Professional Service</h3>
            <p>Expert technicians with years of experience</p>
          </div>
          <div className="feature-card">
            <Sparkles size={32} />
            <h3>Quality Products</h3>
            <p>Premium products and equipment used</p>
          </div>
          <div className="feature-card">
            <Clock size={32} />
            <h3>Time Efficient</h3>
            <p>Quick service without compromising quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;