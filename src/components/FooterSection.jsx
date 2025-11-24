// FooterSection.jsx

import React from 'react';
import './FooterSection.css'; // 👈 Import the CSS file

// Assuming these icons are imported from a library (e.g., Lucide React)
const IconPlaceholder = ({ name }) => <span className="icon-placeholder">{name}</span>;
const Instagram = () => <IconPlaceholder name="Instagram" />;
const Linkedin = () => <IconPlaceholder name="LinkedIn" />;
const Dribbble = () => <IconPlaceholder name="Behance" />;

// FIX: Accept the 'id' prop from App.jsx
const FooterSection = ({ id }) => {
  return (
    // FIX: Clean JSX tag without any non-standard spaces or characters.
    <footer id={id} className="footer-section">
      <div className="footer-container">

        {/* Top Section: Name/Motto and Contact/Follow */}
        <div className="footer-top-grid">

          {/* Left Column: Name and Motto */}
          <div className="footer-col footer-col-name">
            <h2 className="footer-name-title">
              MUNNAJ
              <br />
              NASIR
            </h2>
            <p className="footer-motto">
              Let's create something extraordinary together.
            </p>
          </div>

          {/* Right Column: Contact and Socials */}
          <div className="footer-col footer-col-contact">
            <div className="contact-group">

              {/* Get in Touch */}
              <div className="contact-block">
                <p className="contact-subtitle">GET IN TOUCH</p>
                <a href="mailto:munnajnasir@gmail.com" className="contact-link email-link">
                  munnajnasir@gmail.com
                </a>
                <a href="https://wa.me/923192967179" className="contact-link phone-link">
                  +92 319 296 71 79
                </a>
              </div>

              {/* Follow */}
              <div className="follow-block">
                <p className="contact-subtitle">FOLLOW</p>
                <div className="social-icons-group">
                  <a href="https://www.instagram.com/munjkhan/" className="social-icon-link">
                    <Instagram />
                  </a>
                  <a href="https://www.linkedin.com/in/munjnasir/" className="social-icon-link">
                    <Linkedin />
                  </a>
                  <a href="https://www.behance.net/munnajnasir" className="social-icon-link">
                    <Dribbble />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and External Links */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">© 2025 Munnaj Nasir. All rights reserved.</p>
          <div className="external-links-group">
            <a href="https://www.linkedin.com/in/munjnasir/" className="external-link">[ LINKEDIN ]</a>
            <a href="https://www.behance.net/munnajnasir" className="external-link">[ BEHANCE ]</a>
            <a href="https://www.instagram.com/munjkhan/" className="external-link">[ INSTAGRAM ]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;