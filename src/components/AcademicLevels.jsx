import React from 'react'
import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AcademicLevels.css';

const AcademicLevels = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLevel, setActiveLevel] = useState('nursery');
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

  const academicLevels = {
    nursery: {
      name: 'Early Years (Nursery)',
      age: 'Ages 2-4',
      duration: '2 Years',
      description: 'A nurturing environment where little ones begin their educational journey through play-based learning, developing social skills and foundational knowledge.',
      features: [
        'Play-based learning approach',
        'Montessori-inspired activities',
        'Focus on social-emotional development',
        'Fine and gross motor skills',
        'Introduction to letters and numbers',
        'Regular parent-teacher interactions'
      ],
      subjects: ['Creative Play', 'Story Time', 'Basic Shapes & Colors', 'Rhymes & Music', 'Art & Craft', 'Outdoor Activities'],
      icon: '🎨',
      color: '#667eea'
    },
    primary: {
      name: 'Primary School',
      age: 'Grades 1-5',
      duration: '5 Years',
      description: 'Building strong foundations in core subjects while fostering curiosity, creativity, and critical thinking skills in young learners.',
      features: [
        'Strong foundation in core subjects',
        'Project-based learning',
        'STEM education introduction',
        'Foreign language exposure',
        'Character development program',
        'Weekly assessments and feedback'
      ],
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Skills', 'Arts & Music', 'Physical Education'],
      icon: '📚',
      color: '#764ba2'
    },
    middle: {
      name: 'Middle School',
      age: 'Grades 6-8',
      duration: '3 Years',
      description: 'Bridging the gap between elementary and high school with advanced curriculum, leadership opportunities, and specialized subject exploration.',
      features: [
        'Advanced core curriculum',
        'STEM specialization',
        'Leadership development',
        'Career exploration',
        'Competitive exam preparation',
        'Extracurricular activities'
      ],
      subjects: ['Advanced Math', 'General Science', 'English Literature', 'History & Civics', 'Computer Science', '2nd Language', 'Robotics'],
      icon: '🔬',
      color: '#f59e0b'
    }
  };

  const currentLevel = academicLevels[activeLevel];

  return (
    <section className="academic-levels" ref={sectionRef}>
      <div className="levels-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Academic Levels
            <span className="title-accent">Pathway to Excellence</span>
          </h2>
          <p className="section-subtitle">
            Discover our comprehensive academic programs designed for every stage of learning
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className={`level-tabs ${isVisible ? 'animate' : ''}`}>
          <button 
            className={`tab-btn ${activeLevel === 'nursery' ? 'active' : ''}`}
            onClick={() => setActiveLevel('nursery')}
          >
            <span className="tab-icon">🎨</span>
            <span className="tab-text">Early Years</span>
            <span className="tab-grade">Nursery</span>
          </button>
          <button 
            className={`tab-btn ${activeLevel === 'primary' ? 'active' : ''}`}
            onClick={() => setActiveLevel('primary')}
          >
            <span className="tab-icon">📚</span>
            <span className="tab-text">Primary</span>
            <span className="tab-grade">Grades 1-5</span>
          </button>
          <button 
            className={`tab-btn ${activeLevel === 'middle' ? 'active' : ''}`}
            onClick={() => setActiveLevel('middle')}
          >
            <span className="tab-icon">🔬</span>
            <span className="tab-text">Middle</span>
            <span className="tab-grade">Grades 6-8</span>
          </button>
        </div>

        {/* Level Content */}
        <div className={`level-content ${isVisible ? 'animate' : ''}`}>
          <div className="level-grid">
            {/* Left Column - Main Info */}
            <div className="level-info">
              <div className="level-badge" style={{ background: currentLevel.color }}>
                <span className="level-icon">{currentLevel.icon}</span>
                <span className="level-name">{currentLevel.name}</span>
              </div>
              
              <div className="level-meta">
                <div className="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{currentLevel.age}</span>
                </div>
                <div className="meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>{currentLevel.duration}</span>
                </div>
              </div>

              <p className="level-description">{currentLevel.description}</p>

              <div className="level-features">
                <h4>Key Highlights</h4>
                <ul>
                  {currentLevel.features.map((feature, index) => (
                    <li key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contactus" className="level-cta">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>

            {/* Right Column - Subjects & Curriculum */}
            <div className="level-curriculum">
              <div className="curriculum-header">
                <h3>Curriculum Overview</h3>
                <p>Core subjects & learning areas</p>
              </div>
              
              <div className="subjects-grid">
                {currentLevel.subjects.map((subject, index) => (
                  <div key={index} className="subject-card">
                    <div className="subject-dot" style={{ background: currentLevel.color }}></div>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>

              <div className="curriculum-footer">
                <div className="footer-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  <span>Holistic Development Focus</span>
                </div>
                <div className="footer-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                  <span>Activity-Based Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Comparison Cards */}
        <div className={`comparison-cards ${isVisible ? 'animate' : ''}`}>
          <h3 className="comparison-title">Quick Comparison</h3>
          <div className="cards-grid">
            <div className="comp-card">
              <div className="comp-icon">🎨</div>
              <h4>Early Years</h4>
              <div className="comp-age">Ages 2-4</div>
              <div className="comp-focus">Focus: Play & Discovery</div>
              <div className="comp-duration">2 Years</div>
            </div>
            <div className="comp-card">
              <div className="comp-icon">📚</div>
              <h4>Primary</h4>
              <div className="comp-age">Grades 1-5</div>
              <div className="comp-focus">Focus: Foundations</div>
              <div className="comp-duration">5 Years</div>
            </div>
            <div className="comp-card">
              <div className="comp-icon">🔬</div>
              <h4>Middle</h4>
              <div className="comp-age">Grades 6-8</div>
              <div className="comp-focus">Focus: Exploration</div>
              <div className="comp-duration">3 Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicLevels;