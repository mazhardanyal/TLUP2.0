import React from 'react'
import  { useState, useEffect } from 'react';
import '../components/Gallery.css';

import class9 from '../assets/cl.jpeg';
import class1 from '../assets/clas.jpeg';
import class2 from '../assets/class.jpeg';
import class3 from '../assets/classe.jpeg';
import class4 from '../assets/cla.jpeg';
import class5 from '../assets/class.jpeg';
import class6 from '../assets/clased.jpeg';
import video from '../assets/video.mp4';
import video2 from '../assets/video2.mp4';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = "Gallery - The Level Up School";
  }, []);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Campus View',
      description: 'Beautiful view of our school campus',
      url: class9,
    },
    {
      id: 2,
      type: 'image',
      title: 'Science Lab',
      description: 'Students in chemistry lab',
      url: class1,
    },
    {
      id: 3,
      type: 'image',
      title: 'Sports Day',
      description: 'Students participating in sports',
      url: class2,
    },
    {
      id: 4,
      type: 'image',
      title: 'Annual Day Performance',
      description: 'Cultural program',
      url: class3,
    },
    {
      id: 5,
      type: 'image',
      title: 'Graduation Ceremony',
      description: 'Students receiving degrees',
      url: class4,
    },
    {
      id: 6,
      type: 'image',
      title: 'Library',
      description: 'Students reading in library',
      url: class5,
    },
    {
      id: 7,
      type: 'image',
      title: 'Robotics Class',
      description: 'Students building robots',
      url: class6,
    },
    {
      id: 8,
      type: 'image',
      title: 'Computer Lab',
      description: 'Students learning coding',
      url: class6,
    },
    
    {
      id: 10,
      type: 'video',
      title: 'School Tour Video',
      description: 'Take a virtual tour of our campus',
      videoUrl: video,  // Local video file
      thumbnail: class9,  // Use an image as thumbnail
    },
    {
      id: 11,
      type: 'video',
      title: 'School Tour Video',
      description: 'Take a virtual tour of our campus',
      videoUrl: video2,  // Local video file
      thumbnail: class4,  // Use an image as thumbnail
    },
  ];

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedMedia(galleryItems[nextIndex]);
  };

  const prevMedia = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedMedia.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedMedia(galleryItems[prevIndex]);
  };

  return (
    <div className="simple-gallery">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Gallery</h1>
          <p>Capturing beautiful moments from our school</p>
        </div>
      </div>

      <div className="gallery-container">
        {/* Gallery Grid */}
        <div className={`gallery-grid ${isVisible ? 'animate' : ''}`}>
          {galleryItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`gallery-card ${item.type === 'video' ? 'video-card' : ''}`}
              onClick={() => handleMediaClick(item)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="card-inner">
                <div className="card-media">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.url} 
                    alt={item.title}
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="play-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                  <div className="card-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="gallery-lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>×</button>
            <button className="lightbox-prev" onClick={prevMedia}>‹</button>
            <button className="lightbox-next" onClick={nextMedia}>›</button>
            
            <div className="lightbox-media">
              {selectedMedia.type === 'video' ? (
                <div className="video-wrapper">
                  {selectedMedia.videoUrl?.includes('youtube.com') ? (
                    <iframe 
                      src={selectedMedia.videoUrl} 
                      title={selectedMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video 
                      controls 
                      autoPlay 
                      className="local-video"
                      src={selectedMedia.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ) : (
                <img src={selectedMedia.url} alt={selectedMedia.title} />
              )}
            </div>
            
            <div className="lightbox-info">
              <h2>{selectedMedia.title}</h2>
              <p>{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;