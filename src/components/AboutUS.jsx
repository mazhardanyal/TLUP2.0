import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import class9 from "../assets/class9.jpeg";
import './AboutUS.css';

const About = () => {
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
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">

        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Who We Are</span>

          <h2 className="section-title">
            Shaping Tomorrow's Leaders
            <span className="title-accent">Since 1995</span>
          </h2>

          <p className="section-subtitle">
            Discover the story behind Level Up School and our commitment to excellence
          </p>
        </div>

        <div className="about-grid">

          {/* Left Column */}
          <div className={`about-content ${isVisible ? 'animate' : ''}`}>

            <div className="about-text">
              <h3>More Than Just a School</h3>

              <p>
                Level Up School was founded with a singular vision:
                to create an educational environment where academic
                excellence meets character development. Over the
                past 25+ years, we've grown into one of the region's
                most respected educational institutions, nurturing
                thousands of successful graduates.
              </p>

              <p>
                Our holistic approach combines rigorous academics
                with arts, athletics, and community service,
                ensuring every student discovers their unique
                potential. We believe education extends beyond
                textbooks — it's about building confidence,
                fostering curiosity, and developing global citizens.
              </p>
            </div>

            {/* Features */}
           <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                </div>
                <div>
                  <h4>Academic Excellence</h4>
                  <p>Top-tier curriculum with 98% college acceptance rate</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5.5 20v-4a6.5 6.5 0 0 1 13 0v4" />
                  </svg>
                </div>

                <div>
                  <h4>Expert Faculty</h4>
                  <p>95% of teachers hold advanced degrees</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>

                <div>
                  <h4>Modern Facilities</h4>
                  <p>State-of-the-art labs, libraries, and sports complex</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>

                <div>
                  <h4>Global Perspective</h4>
                  <p>International exchange programs and partnerships</p>
                </div>
              </div>

            </div>

            <Link to="/about" className="about-btn">
              Learn More About Us

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

          </div>

          {/* Right Column */}
          <div className={`about-visual ${isVisible ? 'animate' : ''}`}>

            {/* Main Image Card */}
            <div className="about-image-card">

              <div className="image-wrapper">

                <div className="image-placeholder">
                  <img
                    src={class9}
                    alt="Level Up School"
                    className="school-main-img"
                  />
                </div>


              </div>

            </div>

            {/* Stats */}
            <div className="about-stats-grid">

              <div className="stat-card">
                <div className="stat-value">25+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">2000+</div>
                <div className="stat-label">Happy Students</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">150+</div>
                <div className="stat-label">Expert Faculty</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">30+</div>
                <div className="stat-label">Countries</div>
              </div>

            </div>

            {/* Quote Card */}
            <div className="quote-card">

              <div className="quote-icon">"</div>

              <p className="quote-text">
                Education is not the filling of a pail,
                but the lighting of a fire.
              </p>

              <p className="quote-author">
                - William Butler Yeats
              </p>

            </div>

          </div>

        </div>

        {/* Milestones */}
        <div className={`milestones ${isVisible ? 'animate' : ''}`}>

          <h3 className="milestones-title">
            Our Journey of Excellence
          </h3>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>Level Up established with 50 students</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>Expansion</h4>
                <p>New campus and facilities added</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>Recognition</h4>
                <p>Top 10 schools in the region</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>Innovation</h4>
                <p>Digital learning transformation</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;