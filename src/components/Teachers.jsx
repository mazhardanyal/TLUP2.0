import React, { useEffect, useRef, useState } from 'react';


const Teachers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
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

  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      subject: "Mathematics & STEM Coordinator",
      qualification: "Ph.D. in Mathematics",
      experience: "15+ years",
      bio: "Dr. Mitchell brings innovative teaching methods and a passion for making math exciting. She has published multiple research papers in math education.",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      social: {
        linkedin: "#",
        email: "s.mitchell@eliteacademy.edu"
      },
      achievements: ["Best Teacher Award 2022", "STEM Innovation Grant"]
    },
    {
      id: 2,
      name: "Prof. James Wilson",
      subject: "Head of Science Department",
      qualification: "M.Sc. in Physics",
      experience: "20+ years",
      bio: "Professor Wilson leads our award-winning science program. His hands-on approach has inspired countless students to pursue STEM careers.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      social: {
        linkedin: "#",
        email: "j.wilson@eliteacademy.edu"
      },
      achievements: ["Science Teacher of the Year", "Research Grant 2023"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      subject: "English Literature & Language Arts",
      qualification: "M.A. in English",
      experience: "12+ years",
      bio: "Ms. Rodriguez creates a vibrant literary community where students discover the joy of reading and creative writing. She runs the school's literary magazine.",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      social: {
        linkedin: "#",
        email: "e.rodriguez@eliteacademy.edu"
      },
      achievements: ["Poetry Awards", "Literary Excellence Recognition"]
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      subject: "Computer Science & Robotics",
      qualification: "Ph.D. in Computer Science",
      experience: "10+ years",
      bio: "Dr. Chen leads our cutting-edge robotics program. His students have won multiple national robotics competitions.",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      social: {
        linkedin: "#",
        email: "m.chen@eliteacademy.edu"
      },
      achievements: ["Robotics Coach of the Year", "Tech Innovation Award"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      subject: "Arts & Music Director",
      qualification: "B.F.A. in Fine Arts",
      experience: "18+ years",
      bio: "Lisa inspires creativity through visual arts and music. Her students have won numerous art competitions and perform at prestigious venues.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      social: {
        linkedin: "#",
        email: "l.thompson@eliteacademy.edu"
      },
      achievements: ["Art Educator Award", "Community Arts Recognition"]
    },
    {
      id: 6,
      name: "Robert Kumar",
      subject: "Physical Education & Sports",
      qualification: "M.P.Ed.",
      experience: "14+ years",
      bio: "Coach Kumar has developed championship-winning teams and promotes holistic wellness through sports and fitness programs.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        linkedin: "#",
        email: "r.kumar@eliteacademy.edu"
      },
      achievements: ["National Coach Certification", "Sports Excellence Award"]
    }
  ];

  return (
    <section className="teachers-section" ref={sectionRef}>
      <div className="teachers-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Our Faculty</span>
          <h2 className="section-title">
            Meet Our Dedicated Teachers
            <span className="title-accent">Experts in Education</span>
          </h2>
          <p className="section-subtitle">
            Our passionate educators are committed to nurturing young minds and fostering excellence
          </p>
        </div>

        {/* Teacher Stats */}
        <div className={`teacher-stats ${isVisible ? 'animate' : ''}`}>
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Expert Faculty</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Average Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Hold Advanced Degrees</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1:15</div>
            <div className="stat-label">Teacher-Student Ratio</div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className={`teachers-grid ${isVisible ? 'animate' : ''}`}>
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className="teacher-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner">
                {/* Teacher Image */}
                <div className="teacher-image">
                  <img src={teacher.image} alt={teacher.name} />
                  <div className="image-overlay">
                    <button 
                      className="view-profile-btn"
                      onClick={() => setSelectedTeacher(teacher)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="teacher-info">
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-subject">{teacher.subject}</p>
                  <div className="teacher-qualifications">
                    <div className="qualification-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                      </svg>
                      <span>{teacher.qualification}</span>
                    </div>
                    <div className="qualification-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{teacher.experience} Experience</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="teacher-social">
                    <a href={`mailto:${teacher.social.email}`} className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                    <a href={teacher.social.linkedin} className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Profile Modal */}
        {selectedTeacher && (
          <div className="modal-overlay" onClick={() => setSelectedTeacher(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedTeacher(null)}>×</button>
              
              <div className="modal-grid">
                <div className="modal-image">
                  <img src={selectedTeacher.image} alt={selectedTeacher.name} />
                </div>
                
                <div className="modal-info">
                  <h2>{selectedTeacher.name}</h2>
                  <p className="modal-subject">{selectedTeacher.subject}</p>
                  
                  <div className="modal-details">
                    <div className="detail-item">
                      <strong>Qualification:</strong> {selectedTeacher.qualification}
                    </div>
                    <div className="detail-item">
                      <strong>Experience:</strong> {selectedTeacher.experience}
                    </div>
                  </div>
                  
                  <div className="modal-bio">
                    <h3>About</h3>
                    <p>{selectedTeacher.bio}</p>
                  </div>
                  
                  <div className="modal-achievements">
                    <h3>Achievements</h3>
                    <ul>
                      {selectedTeacher.achievements.map((achievement, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-contact">
                    <a href={`mailto:${selectedTeacher.social.email}`} className="contact-btn">
                      Contact Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      
      </div>
    </section>
  );
};

export default Teachers;