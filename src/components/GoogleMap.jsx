import React, { useEffect, useRef, useState } from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef(null);
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

  // Embed URL - Replace with your actual Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d41823.86129000448!2d71.4637312!3d34.0099072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38d917d9c42d18cb%3A0x7e7564fed219f178!2sLady%20Reading%20Hospital%20MTI%20Peshawar%2C%20Soekarno%20Rd%2C%20Pipal%20Mandi%2C%20Peshawar%2C%2025000%2C%20Pakistan!3m2!1d34.0105666!2d71.568776!5e1!3m2!1sen!2s!4v1777920843746!5m2!1sen!2s";
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
            Conveniently located in the heart of the city with easy access from all major routes
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
              title="Level Up School System Location"
            ></iframe>
            
            
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default GoogleMap;