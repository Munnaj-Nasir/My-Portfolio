// HeroSection.jsx (Final Version)

import React from 'react';
// Path assumes HeroSection.jsx is in 'src/components' and profile.png is in 'src/assets'
import profileImage from '../assets/profile.png'; 
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        
        {/* Large Main Title - Overlapping and positioned */}
        <h1 className="hero-title-overlay">
          CREATIVE DESIGNER
        </h1>

        {/* Location Tag - Positioned to the right of the main title */}
        {/* <div className="hero-location-top-right">
          <span className="location-item">BASED</span>
          <span className="location-item">IN</span>
          <span className="location-item">UKRAINE</span>
        </div> */}

        {/* Image - Central and prominent */}
        <div className="hero-image-container">
          <img 
            src={profileImage} 
            alt="Olha Lazarieva Profile" 
            className="hero-main-image" 
          />
        </div>

        {/* 🚀 CHANGE 1: Skills List - Moved fully to the LEFT, off the image */}
        <div className="hero-skills-bottom-left">
          <p className="skill-item-line">/ UI/UX Design</p>
          <p className="skill-item-line">/ Branding</p>
          <p className="skill-item-line">/ Graphic Design</p>
        </div>
        
        {/* 🚀 CHANGE 2: Contact Info - New box on the RIGHT */}
        <div className="hero-contact-right">
            <a href="mailto:olha.lazarieva.0304@gmail.com" className="contact-item">
                MUNNAJNASIR@GMAIL.COM
            </a>
            <a href="tel:+380964683171" className="contact-item">
                +92 319 296 71 79
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;