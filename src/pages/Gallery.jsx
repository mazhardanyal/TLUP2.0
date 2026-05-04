import React, { useState, useEffect } from 'react';
import '../components/Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = "Gallery - The Level Up School";
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '✨' },
    { id: 'campus', name: 'Campus', icon: '🏛️' },
    { id: 'academics', name: 'Academics', icon: '📖' },
    { id: 'sports', name: 'Sports', icon: '⚡' },
    { id: 'arts', name: 'Arts', icon: '🎭' },
    { id: 'events', name: 'Events', icon: '🎪' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'campus',
      title: 'Aerial View of The Level Up School',
      description: 'Our sprawling 50-acre campus with state-of-the-art facilities',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      size: 'large'
    },
    {
      id: 2,
      type: 'image',
      category: 'academics',
      title: 'Future Scientists at Work',
      description: 'Students conducting innovative experiments in our advanced chemistry lab',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
      size: 'medium'
    },
    {
      id: 3,
      type: 'image',
      category: 'sports',
      title: 'Championship Victory',
      description: 'Our basketball team winning the inter-school championship',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800',
      size: 'small'
    },
    {
      id: 4,
      type: 'image',
      category: 'arts',
      title: 'Annual Day Spectacular',
      description: 'Mesmerizing dance performance at our cultural festival',
      image: 'https://images.unsplash.com/photo-1507676184212-d6a6e9c5ca8d?w=800',
      size: 'medium'
    },
    {
      id: 5,
      type: 'image',
      category: 'events',
      title: 'Graduation Day 2024',
      description: 'Proud moments as our students receive their diplomas',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      size: 'large'
    },
    {
      id: 6,
      type: 'image',
      category: 'campus',
      title: 'Modern Library',
      description: 'Digital resources and quiet study spaces',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800',
      size: 'small'
    },
    {
      id: 7,
      type: 'image',
      category: 'academics',
      title: 'Robotics Championship',
      description: 'Our robotics team preparing for nationals',
      image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800',
      size: 'medium'
    },
    {
      id: 8,
      type: 'image',
      category: 'sports',
      title: 'Swimming Champions',
      description: 'State-level swimming competition winners',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
      size: 'medium'
    },
    {
      id: 9,
      type: 'video',
      category: 'events',
      title: 'Annual Day 2024 Highlights',
      description: 'Watch the spectacular performances from our biggest event',
      thumbnail: 'https://images.unsplash.com/photo-1507676184212-d6a6e9c5ca8d?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      size: 'large'
    },
    {
      id: 10,
      type: 'image',
      category: 'arts',
      title: 'Art Gallery Exhibition',
      description: 'Student artworks displayed at city art gallery',
      image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800',
      size: 'small'
    },
    {
      id: 11,
      type: 'image',
      category: 'academics',
      title: 'Computer Science Lab',
      description: 'Students learning AI and Machine Learning',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      size: 'medium'
    },
    {
      id: 12,
      type: 'video',
      category: 'sports',
      title: 'Sports Day 2024',
      description: 'Highlights from our annual sports extravaganza',
      thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe807baa262?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      size: 'medium'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedMedia(filteredItems[nextIndex]);
  };

  const prevMedia = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedMedia(filteredItems[prevIndex]);
  };

  return (
    <div className="premium-gallery">
      {/* Hero Section */}
      <div className="gallery-hero-premium">
        <div className="hero-bg-animated"></div>
        <div className="hero-content-premium">
          <div className="hero-badge">
            <span>📸 Moments That Matter</span>
          </div>
          <h1 className="hero-title">
            <span className="title-word">Our</span>
            <span className="title-gradient">Visual</span>
            <span className="title-word">Story</span>
          </h1>
          <p className="hero-subtitle">Every picture tells a story of growth, learning, and unforgettable memories</p>
        </div>
      
      </div>

      <div className="gallery-wrapper">
        {/* Filter Bar */}
        <div className={`filter-bar-premium ${isVisible ? 'animate' : ''}`}>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-chip ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                <span className="chip-icon">{cat.icon}</span>
                <span className="chip-name">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`premium-masonry-grid ${isVisible ? 'animate' : ''}`}>
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`masonry-item ${item.type === 'video' ? 'video-item' : ''}`}
              onClick={() => handleMediaClick(item)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="masonry-inner">
                <div className="masonry-media">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="video-badge">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                  <div className="masonry-overlay">
                    <div className="overlay-content-premium">
                      <div className="item-category-badge">
                        {categories.find(c => c.id === item.category)?.name}
                      </div>
                      <h3 className="item-title-premium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="premium-lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>×</button>
            <button className="lightbox-prev" onClick={prevMedia}>‹</button>
            <button className="lightbox-next" onClick={nextMedia}>›</button>
            
            <div className="lightbox-media">
              {selectedMedia.type === 'video' ? (
                <div className="video-container">
                  <iframe 
                    src={selectedMedia.videoUrl} 
                    title={selectedMedia.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={selectedMedia.image} alt={selectedMedia.title} />
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