import React, { useEffect, useRef, useState } from 'react';
import './PrincipalsMessage.css';

const PrincipalsMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="principals-message" ref={sectionRef}>
      <div className="message-container">
        <div className={`message-grid ${isVisible ? 'animate' : ''}`}>
          {/* Left Column - Principal's Photo */}
          <div className="principal-photo">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="500" rx="20" fill="url(#gradPrincipal)" opacity="0.9"/>
                  <circle cx="200" cy="180" r="80" fill="white" opacity="0.15"/>
                  <path d="M150 350 L200 280 L250 300 L300 270 L350 350" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <rect x="160" y="400" width="80" height="60" rx="10" fill="white" opacity="0.15"/>
                  <circle cx="150" cy="120" r="10" fill="white" opacity="0.3"/>
                  <circle cx="250" cy="100" r="15" fill="white" opacity="0.2"/>
                  <defs>
                    <linearGradient id="gradPrincipal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#667eea"/>
                      <stop offset="100%" stopColor="#764ba2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="photo-overlay">
                  <div className="signature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"     fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 16l5-5 5 5 5-5 5 5" strokeLinecap="round"/>
                      <path d="M3 12v-3" strokeLinecap="round"/>
                      <path d="M18 9v3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Mr.Fidda Durrai</span>
                  <p>Principal, The Level Up</p>
                </div>
              </div>
            </div>
            
            {/* Social/Achievement Badges */}
            <div className="principal-badges">
              <div className="badge-item">
                <div className="badge-icon">🏆</div>
                <div className="badge-text">12+ Years Experience</div>
              </div>
              <div className="badge-item">
                <div className="badge-icon">📜</div>
                <div className="badge-text">PhD in Education</div>
              </div>
            </div>
          </div>

          {/* Right Column - Message Content */}
          <div className="message-content">
            <div className="message-header">
              <span className="message-tag">A Message From Our Principal</span>
              <h2 className="message-title">Welcome to The Level Up</h2>
              <div className="title-decoration"></div>
            </div>

            <div className="message-body">
              <p className="greeting">Dear Parents and Students,</p>
              
              <p>
                It is with great pride and enthusiasm that I welcome you to The Level Up School. 
                For over 25 years, we have been committed to creating an environment where 
                academic excellence meets character development, and where every child is 
                empowered to reach their full potential.
              </p>
              
              <p>
                At The Level Up School, we believe that education extends far beyond textbooks 
                and examinations. We focus on nurturing curious minds, building resilient 
                characters, and fostering a lifelong love for learning. Our dedicated 
                faculty works tirelessly to ensure that each student receives personalized 
                attention and guidance.
              </p>
              
              <p>
                Our holistic approach combines rigorous academics with arts, athletics, 
                and community service, ensuring that our students graduate as well-rounded 
                individuals ready to face the challenges of tomorrow. We take pride in our 
                state-of-the-art facilities, innovative teaching methods, and inclusive 
                community that celebrates diversity.
              </p>
              
              <p>
                I invite you to visit our campus and experience firsthand the warmth and 
                excellence that defines The Level Up School. Together, let's build a bright 
                future for your children.
              </p>
              
              <div className="message-footer">
                <div className="signature">
                  <div className="signature-line"></div>
                  <p className="principal-name">Mr.Fidda Durrani</p>
                  <p className="principal-title">Principal</p>
                </div>
                
                <div className="message-quote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 11h-4v-4h4v4zM18 11h-4v-4h4v4z"/>
                    <path d="M4 4h16v16H4z"/>
                  </svg>
                  <span>"Empowering minds, shaping futures"</span>
                </div>
              </div>
            </div>

            {/* Stats Highlight */}
            <div className="message-stats">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Parent Satisfaction</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;