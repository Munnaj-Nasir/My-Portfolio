// ServicesSection.jsx

import React from 'react';
import './ServiceSection.css';

// FIX 1: Correctly accept the 'id' prop for scrolling
const ServicesSection = ({ id }) => {
  // Array defining the service data
  const services = [
    {
      number: '01',
      title: 'Brand Identity',
      description: 'I create full visual identities that give brands a clear, memorable presence. From logos and color systems to typography and overall art direction, I build design foundations that feel modern, intentional, and aligned with the brand’s personality.',
    },
    {
      number: '02',
      title: 'Social Media Design',
      description: 'I design engaging, high-quality visuals that help brands communicate better online. This includes campaign graphics, carousel layouts, story design, ads, and promotional content that feels cohesive, stylish, and strategically crafted for growth.',
    },
    {
      number: '03',
      title: 'UI/UX Design',
      description: 'I design clean, intuitive digital experiences for websites and mobile apps. My focus is on clarity, simplicity, and user-centered layouts supported by strong visual design, thoughtful interactions, and polished design systems.',
    },
    {
      number: '04',
      title: 'Merch & Packaging Mockups',
      description: 'I design professional mockups for packaging, merchandise, and product presentation. This helps brands visualize how their items will look in real life and gives them a strong creative direction before production.',
    },
    {
      number: '05',
      title: 'Print Design',
      description: 'Crafting beautiful print materials from packaging to editorial design. Combining typography, layout, and production knowledge.',
    },
    {
      number: '06',
      title: 'Product & Print Design',
      description: 'I design print-ready visuals such as packaging, posters, lookbooks, and branded collateral. Every piece is crafted with attention to layout, color, and typography to ensure it not only looks beautiful but also communicates effectively in real-world use.',
    },
  ];

  return (
    // FIX 2: Clean JSX tag. Apply the received 'id' here for scrolling.
    <section id={id} className="services-section">
      <div className="services-container">

        {/* Header Block */}
        <div className="services-header">
          <p className="services-subtitle">WHAT I DO</p>
          <h2 className="services-title">SERVICES</h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.number} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3 className="service-heading">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;