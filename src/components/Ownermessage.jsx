import  { useEffect, useRef, useState } from 'react';
import './Ownermessage.css';
import Owner from '../assets/Owner.jpeg';

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
          {/* Left Column - Message Content (NOW ON LEFT) */}
          <div className="message-content">
            <div className="message-header">
              <span className="message-tag">A Message From Our Owner</span>
              <h2 className="message-title">Welcome to The Level Up</h2>
              <div className="title-decoration"></div>
            </div>

            <div className="message-body">
              <p className="greeting">Dear Parents and Students,</p>
              
              <p>
               It gives me immense pleasure to welcome you to The Level Up School, 
  a place where education is not only about academic achievement but 
  also about inspiring confidence, discipline, and creativity in every child. 
  Since our establishment, our mission has been to provide students with 
  a safe, modern, and motivating environment where they can grow into 
  responsible and successful individuals.
              </p>
              
              <p>
                 At The Level Up School, we strongly believe that every student possesses 
  unique talents and abilities. Our goal is to nurture those talents through 
  quality education, innovative teaching methods, and continuous encouragement. 
  We are committed to building strong foundations that prepare students not 
  only for examinations but also for the real challenges of life.
              </p>
              
              <p>
                Our dedicated teachers and staff work passionately to ensure that learning 
  remains engaging, meaningful, and student-centered. Alongside academics, 
  we emphasize character building, leadership, teamwork, and moral values 
  so that our students become confident individuals who contribute positively 
  to society and their communities.
              </p>
              
              <p>
                 We continuously strive to improve our facilities, teaching standards, 
  and educational opportunities to meet the demands of the modern world. 
  I warmly invite you to become part of The Level Up family and experience 
  an institution that is committed to excellence, innovation, and the future 
  success of every student.
              </p>
              
              <div className="message-footer">
                <div className="signature">
                  <div className="signature-line"></div>
                  <p className="principal-name">Mr. Saddam Hussain</p>
                  <p className="principal-title">Owner</p>
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
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Principal's Photo (NOW ON RIGHT) */}
          <div className="principal-photo">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img
                  src={Owner}
                  alt="Owner"
                  className="school-main-img"
                />
                <div className="photo-overlay">
                  <div className="signature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 16l5-5 5 5 5-5 5 5" strokeLinecap="round"/>
                      <path d="M3 12v-3" strokeLinecap="round"/>
                      <path d="M18 9v3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Mr. Saddam Hussain</span>
                  <p>Owner, The Level Up</p>
                </div>
              </div>
            </div>

            {/* Social/Achievement Badges */}
            <div className="principal-badges">
              <div className="badge-item">
                <div className="badge-icon">🏆</div>
                <div className="badge-text">5+ Years Experience</div>
              </div>
              <div className="badge-item">
                <div className="badge-icon">📜</div>
                <div className="badge-text">Master In Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;