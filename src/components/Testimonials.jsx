import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      childName: "Emily Johnson - Grade 5",
      rating: 5,
      review: "The Level Up School has been transformative for my daughter. The teachers genuinely care about each student's success, and the holistic approach to education has helped Emily excel both academically and personally. We couldn't be happier with our choice!",
      date: "March 2024",
      avatar: "SJ",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Michael Chen",
      childName: "Alexander Chen - Grade 7",
      rating: 5,
      review: "The STEM program at The Level Up School is outstanding. My son has developed a genuine passion for science and technology. The facilities are state-of-the-art, and the extracurricular activities are diverse and engaging.",
      date: "February 2024",
      avatar: "MC",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      location: "Boston, MA"
    },
    {
      id: 3,
      name: "David Williams",
      childName: "Sophia Williams - Grade 3",
      rating: 5,
      review: "The caring environment and dedicated teachers have made all the difference. Our daughter looks forward to school every day and has grown so much in confidence. The parent-teacher communication is exceptional!",
      date: "January 2024",
      avatar: "DW",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "Jessica Martinez",
      childName: "Isabella Martinez - Grade 2",
      rating: 5,
      review: "We moved our daughter to The Level Up School last year, and it's been the best decision. The focus on character development alongside academics is exactly what we wanted. She's thriving in this environment.",
      date: "December 2023",
      avatar: "JM",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      location: "Miami, FL"
    },
    {
      id: 5,
      name: "Robert Taylor",
      childName: "James Taylor - Grade 8",
      rating: 5,
      review: "The sports program and leadership opportunities at The Level Up School are phenomenal. My son has not only improved academically but has also developed crucial life skills. Highly recommended!",
      date: "November 2023",
      avatar: "RT",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      location: "Austin, TX"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Get current and adjacent testimonials for carousel effect
  const getVisibleTestimonials = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      let index = (activeIndex + i + testimonials.length) % testimonials.length;
      indices.push(index);
    }
    return indices;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Parent Testimonials</span>
          <h2 className="section-title">
            What Parents Say
            <span className="title-accent">About Our School</span>
          </h2>
          <p className="section-subtitle">
            Real stories from our parent community about their children's journey at The Level Up School
          </p>
        </div>

        {/* Rating Summary */}
        <div className={`rating-summary ${isVisible ? 'animate' : ''}`}>
          <div className="overall-rating">
            <div className="rating-score">4.9</div>
            <div className="rating-stars">
              <span>★★★★★</span>
              <span className="rating-outof">/ 5.0</span>
            </div>
            <div className="rating-count">Based on 500+ parent reviews</div>
          </div>
          <div className="rating-badges">
            <div className="badge">
              <span className="badge-icon">⭐</span>
              <span>Excellent Academics</span>
            </div>
            <div className="badge">
              <span className="badge-icon">❤️</span>
              <span>Caring Teachers</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span>Best Facilities</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`testimonials-carousel ${isVisible ? 'animate' : ''}`}>
          <button className="carousel-nav prev" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="carousel-container">
            <div className="carousel-track">
              {visibleTestimonials.map((index, position) => {
                const testimonial = testimonials[index];
                const isCenter = position === 1;
                return (
                  <div 
                    key={testimonial.id} 
                    className={`testimonial-card ${isCenter ? 'center' : 'side'}`}
                  >
                    <div className="card-inner">
                      {/* Quote Icon */}
                      <div className="quote-icon">"</div>
                      
                      {/* Rating Stars */}
                      <div className="testimonial-rating">
                        {'★'.repeat(testimonial.rating)}
                        {'☆'.repeat(5 - testimonial.rating)}
                      </div>
                      
                      {/* Review Text */}
                      <p className="testimonial-review">{testimonial.review}</p>
                      
                      {/* Parent Info */}
                      <div className="parent-info">
                        <div className="parent-avatar">
                          {testimonial.image ? (
                            <img src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <span>{testimonial.avatar}</span>
                          )}
                        </div>
                        <div className="parent-details">
                          <h4 className="parent-name">{testimonial.name}</h4>
                          <p className="parent-child">{testimonial.childName}</p>
                          <div className="parent-meta">
                            <span className="review-date">{testimonial.date}</span>
                            <span className="review-location">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="carousel-nav next" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`testimonials-stats ${isVisible ? 'animate' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Parent Satisfaction</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Families</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Trust</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`testimonials-cta ${isVisible ? 'animate' : ''}`}>
          <p>Ready to join our family?</p>
          <button className="cta-button">Schedule a Tour Today →</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;