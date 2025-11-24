import React from 'react';
import './ProcessSection.css'; // 👈 Import the CSS file

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your brand, goals, and target audience. Research, competitive analysis, and understanding what makes your brand unique.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Developing a clear creative direction and strategic approach. Defining visual language, tone, and key messaging that resonates with your audience.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Bringing concepts to life through iterative design process. Creating mood boards, wireframes, and high-fidelity designs with attention to every detail.',
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'Collaborative review and refinement based on feedback. Fine-tuning every element to ensure the design exceeds expectations and meets objectives.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Final delivery with all assets, guidelines, and documentation. Implementation support and guidance to ensure smooth launch and consistent application.',
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        
        {/* Header Block */}
        <div className="process-header">
          <p className="process-subtitle">HOW I WORK</p>
          <h2 className="process-title">PROCESS</h2>
        </div>

        {/* Process Steps */}
        <div className="process-steps-group">
          {processSteps.map((step, index) => (
            <div key={step.number} className={`process-step ${index === processSteps.length - 1 ? 'border-b-step' : ''}`}>
              
              {/* Step Number Column */}
              <div className="step-col step-col-number">
                <span className="step-number-text">{step.number}</span>
              </div>
              
              {/* Step Title Column */}
              <div className="step-col step-col-title">
                <h3 className="step-title">{step.title}</h3>
              </div>
              
              {/* Step Description Column */}
              <div className="step-col step-col-description">
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;