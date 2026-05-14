import React from 'react'
import  { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpeg'; // Add your logo file name here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-mark">
            <img src={logo} alt="The Level Up School Logo" className="logo-image" />
          </div>
          <div className="logo-text">
            <span className="logo-academy">The Level Up</span>
            <span className="logo-school">School System</span>
          </div>
        </Link>

        <button 
          className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={closeMenu}
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={closeMenu}
              >
                <span>About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/academics" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={closeMenu}
              >
                <span>Academics</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={closeMenu}
              >
                <span>Gallery</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contactus" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={closeMenu}
              >
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
          
          <div className="nav-actions">
            <Link to="/contactus" className="nav-cta-primary">Enroll Now →</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;