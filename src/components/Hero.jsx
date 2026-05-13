import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || window.innerWidth < 1024) return;
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
    <section className="hero-modern" ref={heroRef}>
      {/* Animated Background */}
      <div className="hero-bg-modern">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-blob blob-4"></div>
      </div>

      {/* Noise Texture */}
      <div className="noise-overlay"></div>

      <div className="hero-container-modern">
        <div className="hero-content-modern">
          {/* Animated Badge */}
          <div className="hero-badge-modern">
            <span className="badge-pulse"></span>
            <span>🌟 Since 2020</span>
            <span className="badge-accent">| Excellence Since '20</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title-modern">
            <span className="title-outline">Shape Your</span>
            <span className="title-main">Future</span>
            <span className="title-gradient-modern">Today</span>
          </h1>

          {/* Description */}
          <p className="hero-description-modern">
            Where young minds discover their potential and dreams take flight. 
            Join a community that celebrates curiosity, creativity, and character.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons-modern">
            <Link to="/Contactus" className="btn-primary-modern">
              <span>Begin Your Journey</span>
              <svg className="btn-icon-modern" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link to="/Gallery" className="btn-secondary-modern">
             
              <span>Virtual Tour</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-number">
                <span>25+</span>
                <span className="trust-plus">Years</span>
              </div>
              <div className="trust-label">of Excellence</div>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-number">
                <span>2000+</span>
              </div>
              <div className="trust-label">Happy Students</div>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-number">
                <span>98%</span>
              </div>
              <div className="trust-label">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual-modern">
          <div className="floating-badge badge-1">
            <span>🏆</span>
            <span>Qualified Teachers</span>
          </div>
          <div className="floating-badge badge-2">
            <span>👩‍🏫</span>
            <span>Expert Faculty</span>
          </div>
          
          
          <div className="hero-image-modern">
            <div className="image-ring"></div>
            <div className="image-glow-modern"></div>
            <div className="hero-illustration">
              <svg viewBox="0 0 500 450" fill="none">
                <circle cx="250" cy="225" r="120" fill="url(#gradient1)" opacity="0.4"/>
                <path d="M150 300 L200 200 L250 250 L300 180 L350 280" stroke="url(#gradient2)" strokeWidth="5" strokeLinecap="round" fill="none"/>
                <circle cx="200" cy="220" r="12" fill="#667eea"/>
                <circle cx="300" cy="210" r="12" fill="#764ba2"/>
                <rect x="220" y="280" width="60" height="70" rx="10" fill="url(#gradient1)" opacity="0.8"/>
                <path d="M250 200 L250 250 M220 230 L280 230" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#667eea"/>
                    <stop stopColor="#764ba2"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#667eea"/>
                    <stop stopColor="#f093fb"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <div className="scroll-wheel"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;