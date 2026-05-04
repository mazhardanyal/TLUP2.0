import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', x);
      heroRef.current.style.setProperty('--mouse-y', y);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
         
          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="title-line">Nurturing Minds. Building Futures</span>
            <span className="title-gradient">Inspiring Excellence</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Empowering the next generation of leaders, innovators, and changemakers. 
            Join a community where academic excellence meets character development.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link to="/admissions" className="btn-primary">
              <span>Start Your Journey</span>
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline> 
              </svg>
            </Link>
            <Link to="/about" className="btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span>Virtual Tour</span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="25">5</span>
                <span>+</span>
              </div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="2000">5  00</span>
                <span>+</span>
              </div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="98">98</span>
                <span>%</span>
              </div>
              <div className="stat-label">Graduation Rate</div>
            </div>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🏆</div>
            <div className="card-text">Top Ranked</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">👩‍🎓</div>
            <div className="card-text">Expert Faculty</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🌍</div>
            <div className="card-text">Global Alumni</div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>
            <div className="hero-image">
              <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="150" y="180" width="300" height="200" rx="20" fill="url(#grad1)" opacity="0.3"/>
                <circle cx="300" cy="280" r="80" fill="url(#grad2)" opacity="0.6"/>
                <path d="M200 300 L250 250 L300 280 L350 230 L400 300" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <circle cx="250" cy="240" r="10" fill="#667eea"/>
                <circle cx="350" cy="220" r="10" fill="#764ba2"/>
                <rect x="270" y="300" width="60" height="80" rx="5" fill="url(#grad2)" opacity="0.8"/>
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                  <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#764ba2" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;