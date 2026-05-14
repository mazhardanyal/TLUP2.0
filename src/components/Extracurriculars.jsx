import  { useEffect, useRef, useState } from 'react';
import './Extracurriculars.css';

const Extracurriculars = () => {
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

  const extracurricularData = {
    sports: {
      title: 'Sports & Athletics',
      icon: '⚽',
      color: '#f59e0b',
      activities: [
        'Basketball',
        'Soccer',
        'Cricket',
        'Swimming',
        'Athletics',
        'Tennis',
        'Volleyball',
        'Badminton',
        'Martial Arts',
        'Yoga'
      ]
    },
    arts: {
      title: 'Arts & Culture',
      icon: '🎨',
      color: '#ef4444',
      activities: [
        'Drama & Theater',
        'School Band',
        'Choir',
        'Art Club',
        'Photography',
        'Dance',
        'Music Production',
        'Painting',
        'Craft Workshops',
        'Film Making'
      ]
    },
    clubs: {
      title: 'Academic Clubs',
      icon: '🤖',
      color: '#10b981',
      activities: [
        'Robotics Club',
        'Debate Team',
        'Chess Club',
        'Science Club',
        'Math Olympiad',
        'Coding Club',
        'Astronomy Club',
        'Book Club',
        'Eco Club',
        'Quiz Team'
      ]
    },
    leadership: {
      title: 'Leadership & Service',
      icon: '👔',
      color: '#8b5cf6',
      activities: [
        'Student Council',
        'Peer Tutoring',
        'Model UN',
        'Community Service',
        'Yearbook Committee',
        'Event Organizers',
        'Mediation Team',
        'Wellness Ambassadors',
        'Tech Support Team',
        'School Newspaper'
      ]
    }
  };

  return (
    <section className="extracurriculars" ref={sectionRef}>
      <div className="extracurriculars-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Beyond the Classroom</span>
          <h2 className="section-title">
            Extracurricular Activities
            <span className="title-accent">Discover Your Passion</span>
          </h2>
          <p className="section-subtitle">
            Explore a wide range of activities that help students develop new skills, make friends, and grow as individuals
          </p>
        </div>

        {/* Activities Grid */}
        <div className={`activities-grid ${isVisible ? 'animate' : ''}`}>
          {Object.entries(extracurricularData).map(([key, data], idx) => (
            <div key={key} className="activity-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="card-header" style={{ borderBottomColor: data.color }}>
                <div className="card-icon" style={{ background: `${data.color}20`, color: data.color }}>
                  {data.icon}
                </div>
                <h3 className="card-title">{data.title}</h3>
              </div>
              <div className="activities-list">
                {data.activities.map((activity, i) => (
                  <div key={i} className="activity-tag">
                    <span className="tag-dot" style={{ background: data.color }}></span>
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className={`activities-stats ${isVisible ? 'animate' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Activities</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Student Participation</div>
          </div>
          <div className="stat-divider"></div>
          
        </div>

        {/* Quote Section */}
        <div className={`activities-quote ${isVisible ? 'animate' : ''}`}>
          <div className="quote-icon">"</div>
          <p className="quote-text">
            The arts, sports, and clubs at Level Up School helped me discover my true potential and build lifelong friendships.
          </p>
          <p className="quote-author">- Kamran Khan (Class of 2023)</p>
        </div>

        {/* CTA Section */}
      
      </div>
    </section>
  );
};

export default Extracurriculars;