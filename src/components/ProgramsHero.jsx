import { Link } from 'react-router-dom';    
import React from 'react';
import './ProgramsHero.css';

const ProgramsHero = () => {
  return (
    <div className="programs-hero">
      <div className="hero-background">
        <div className="gradient-bg"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">Our Academic Programs</span>
          <h1 className="hero-title">
            A Complete Pathway to
            <span className="title-gradient"> Excellence</span>
          </h1>
          <p className="hero-description">
            From early years to college preparation, discover our comprehensive programs 
            designed to nurture, challenge, and inspire every student.
          </p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn-secondary">Schedule a Tour</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">College Acceptance</div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ProgramsHero;