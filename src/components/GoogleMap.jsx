import React, { useEffect, useRef, useState } from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
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

  // Updated Google Maps Embed URL for LevelUp School System
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d167359.6746361777!2d71.56547019999998!3d33.97729300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38d93b847ee2187f%3A0x2a707a7fc516d21d!2sLevelUp%20School%20System%2C%20village%20ali%20shah%20U%2FC%20Akbarpura%2C%20Peshawar%2C%20Pakistan!3m2!1d34.0541783!2d71.74235!5e1!3m2!1sen!2s!4v1778789371663!5m2!1sen!2s";

  return (
    <section className="google-map-section" ref={sectionRef}>
      <div className="map-container">
        <div className={`map-header ${isVisible ? 'animate' : ''}`}>
          <span className="map-tag">Find Us Here</span>
          <h2 className="map-title">
            Our Location
            <span className="title-accent">Visit Our Campus</span>
          </h2>
          <p className="map-subtitle">
            Conveniently located with easy access from all major routes
          </p>
        </div>

        <div className={`map-wrapper ${isVisible ? 'animate' : ''}`}>
          <div className="map-card">
            <iframe
              src={mapEmbedUrl}
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LevelUp School System Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;