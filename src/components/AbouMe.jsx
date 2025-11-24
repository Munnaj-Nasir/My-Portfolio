// AboutSection.jsx

import React from 'react';
import './AboutMe.css';

// FIX: Correctly accept the 'id' prop using destructuring { id }
const AboutSection = ({ id }) => { 
  return (
    // FIX: Clean, standard JSX for the section tag with the dynamic id
    <section className="about-section" id={id}>
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column for ABOUT ME title */}
          <div className="about-title-column">
            <h2 className="about-title">
              WHO AM
              <br />
              I ?
            </h2>
            <div className="title-underline"></div>
          </div>

          {/* Right Column for content */}
          <div className="about-content-column">
            <div className="about-text-group">
              <p>
                I'm <span className="highlight-text">Muhammad Munnaj Nasir</span> , a designer specializing in UI/UX, branding, and visual identity. I started designing at 14, turning early curiosity into a focused creative career. Over the years, I’ve taught myself every skill I use today—from layout and typography to digital product design and brand systems.
              </p>
              <p className="sub-text">
                Currently, I work as a UI/UX and Graphic Designer at Softnation Technologies, where I design digital experiences and visual content for modern brands. I believe in clarity, functionality, and strong storytelling. My approach combines design, strategy, and user-centered thinking to create work that doesn’t just look good— it works.
              </p>
              <p className="sub-text">
                Whether I’m working with clients or building personal projects, I care deeply about communication, consistency, and delivering high-quality work that makes an impact.
              </p>
              <div className="stats-group">
                <div className="stat-item">
                  <p className="stat-number">4+</p>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">50+</p>
                  <p className="stat-label">Projects Delivered</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">20+</p>
                  <p className="stat-label">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;