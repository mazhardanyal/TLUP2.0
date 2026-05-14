import React, { useEffect, useRef, useState } from 'react';
import './Teachers.css';

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
      name: "Hajra Khan",
      subject: "Urdu Teacher",
      qualification: "M.A. in Urdu Literature",
      experience: "5+ years",
      bio: "Hajra Khan brings innovative teaching methods and a passion for making Urdu exciting and accessible for all students.",
    },
    {
      id: 2,
      name: "Sania Khan",
      subject: "Science Teacher",
      qualification: "BS in Physics",
      experience: "5+ years",
      bio: "Sania Khan leads our science program. Her hands-on approach has inspired countless students to pursue STEM careers.",
    },
    {
      id: 3,
      name: "Sana Khan",
      subject: "English Teacher",
      qualification: "M.A. in English",
      experience: "5+ years",
      bio: "Ms. Sana Khan creates a vibrant literary community where students discover the joy of reading and creative writing.",
    },
    {
      id: 4,
      name: "Aneela Jamil",
      subject: "Play Group Teacher",
      qualification: "BS in Early Childhood",
      experience: "5+ years",
      bio: "Aneela Jamil is our play group teacher, nurturing young minds with creativity and care. Her engaging activities foster early development and a love for learning.",
    },
    {
      id: 5,
      name: "Saba Khan",
      subject: "History Teacher",
      qualification: "M.A. in History",
      experience: "5+ years",
      bio: "Saba Khan brings a deep passion for history and a commitment to making the subject engaging and accessible for all students.",
    },
    {
      id: 6,
      name: "Shumaila Khan",
      subject: "Islamic Studies Teacher",
      qualification: "M.A. in Islamic Studies",
      experience: "5+ years",
      bio: "Shumaila Khan is our Islamic Studies teacher, dedicated to providing students with a comprehensive understanding of the subject.",
    }
  ];

  // Function to get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Function to get random but consistent color based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', 
      '#43e97b', '#fa709a', '#fee140', '#30cfd0', '#a8edea'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

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
            <div className="stat-number">15+</div>
            <div className="stat-label">Expert Faculty</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Average Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
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
                {/* Teacher Avatar - Profile Image Placeholder */}
                <div className="teacher-image">
                  <div 
                    className="teacher-avatar"
                    style={{ backgroundColor: getAvatarColor(teacher.name) }}
                  >
                    <span className="avatar-initials">{getInitials(teacher.name)}</span>
                  </div>
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Profile Modal - Fixed without achievements */}
        {selectedTeacher && (
          <div className="modal-overlay" onClick={() => setSelectedTeacher(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedTeacher(null)}>×</button>
              
              <div className="modal-grid">
                <div className="modal-image">
                  <div 
                    className="modal-avatar"
                    style={{ backgroundColor: getAvatarColor(selectedTeacher.name) }}
                  >
                    <span className="modal-initials">{getInitials(selectedTeacher.name)}</span>
                  </div>
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