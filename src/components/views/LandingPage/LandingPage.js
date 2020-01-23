import React from 'react';
import Nav from '../../layout/Nav/Nav'
import Hero from '../../layout/HeroAlt/HeroAlt';
import About from '../../layout/About/About';
import Skills from '../../layout/Skills/Skills';
import Portfolio from '../../layout/Portfolio/Portfolio';
import Education from '../../layout/Education/Education';
import Contact from '../../layout/Contact/Contact';
import Footer from '../../layout/Footer/Footer';

function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
      <Nav />
    </div>
  );
}

export default LandingPage;
