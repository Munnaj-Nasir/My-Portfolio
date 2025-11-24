import React from 'react';
import CardSwap, { Card } from './CardSwap';
import './ServiceSection.css'; 

// Example Data (Update Image URLs as needed)
const services = [
    { title: 'Reliable', icon: '</>', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Customizable', icon: '☰', imageUrl: 'https://images.unsplash.com/photo-1549608560-64a2a1608931?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Smooth', icon: '•', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ServiceSection = () => {
    // These props are passed to CardSwap
    const cardWidth = 400;
    const cardHeight = 300;

    return (
        // OUTER WRAPPER: Handles the full-width black background
        <div className="service-section-full-bg">
            
            {/* INNER SECTION: Handles centered content and layout */}
            <section className="service-section">
                
                {/* 1. Left Section: Text Content */}
                <div className="service-text-content">
                    <h2 className="service-title">Card stacks have never looked so good</h2>
                    <p className="service-intro">
                        Just look at it go!
                    </p>
                </div>

                {/* 2. Right Section: Card Swap Component Wrapper */}
                <div className="card-swap-wrapper">
                    <CardSwap
                        width={cardWidth}
                        height={cardHeight}
                    >
                        {/* Render cards based on the service data */}
                        {services.map((service, index) => (
                            <Card key={index} customClass="service-card">
                                {/* Top Tab/Header */}
                                <div className="card-header-tab">
                                    <span className="tab-icon">{service.icon}</span>
                                    {service.title}
                                </div>
                                <div className="card-content">
                                    <img 
                                        src={service.imageUrl} 
                                        alt={service.title} 
                                        className="card-image" 
                                    />
                                    {/* Large, hollow number overlay */}
                                    <div className="card-number-overlay">
                                        {services.length - index} 
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </section>
        </div>
    );
};

export default ServiceSection;