// Navigation.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const WHATSAPP_NUMBER = "+923192967179";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Data structure to handle different navigation types (route, hash, external)
const navItems = [
    { name: 'ABOUT ME', href: '#about-me', type: 'hash' },
    { name: 'WORKS', href: '/works', type: 'route' },
    { name: 'SERVICES', href: '#services', type: 'hash' },
    { name: 'CONNECT', href: '#connect', type: 'hash' }, 
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => setIsOpen(!isOpen);

    // Handler to close the mobile menu after any link is clicked
    const handleNavigationClick = () => {
        setIsOpen(false); 
    };

    return (
        <header className="main-header">
            <nav className="nav-container">
                {/* Branding/Logo Link: Use Link to home route */}
                <Link to="/" className="nav-brand" onClick={handleNavigationClick}>
                    Munnaj <br/> Nasir
                </Link>

                {/* Desktop Navigation Links */}
                <div className="nav-links-group desktop-only">
                    <ul className="desktop-nav-list">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.type === 'route' ? (
                                    // Use Link for routing (e.g., /works)
                                    <Link to={item.href} className="nav-link">
                                        [ {item.name} ]
                                    </Link>
                                ) : (
                                    // Use <a> for in-page scrolling (e.g., #about-me)
                                    <a href={item.href} className="nav-link">
                                        [ {item.name} ]
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Button: External link to WhatsApp */}
                <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-me-button desktop-only"
                >
                    CONTACT ME ↗
                </a>

                {/* MOBILE TOGGLE BUTTON */}
                <button
                    className="menu-toggle"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>

                {/* MOBILE OVERLAY/SIDEBAR */}
                <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}>
                    <ul className="mobile-nav-list">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.type === 'route' ? (
                                    // Use Link for routing, closes menu via handler
                                    <Link 
                                        to={item.href} 
                                        className="mobile-nav-link"
                                        onClick={handleNavigationClick}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    // Use <a> for hash scrolling, closes menu via handler
                                    <a 
                                        href={item.href} 
                                        className="mobile-nav-link"
                                        onClick={handleNavigationClick}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Contact Info */}
                    <div className="mobile-contact-info">
                        <a href={`tel:${WHATSAPP_NUMBER}`}>{WHATSAPP_NUMBER}</a>
                        <a href="mailto:munnajnasir@gmail.com">munnajnasir@gmail.com</a>
                        <a 
                            href={WHATSAPP_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={handleNavigationClick}
                        >
                            WhatsApp Me
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;