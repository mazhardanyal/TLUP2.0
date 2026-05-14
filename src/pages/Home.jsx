import React from 'react'
import Hero from '../components/Hero';
import '../components/Hero.css';
import About from '../components/AboutUS';
import  '../components/AboutUS.css';
import AcademicLevels from '../components/AcademicLevels';
import '../components/AcademicLevels.css';
import Testimonials from '../components/Testimonials';
import '../components/Testimonials.css';
import Contact from '../components/Contact';
import '../components/Contact.css';
const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <AcademicLevels />
      <Testimonials />
      <Contact />
      {/* Other sections will go here */}
    </div>
  );
};

export default Home;