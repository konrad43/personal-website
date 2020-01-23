import React from 'react';
import Nav from './components/layout/Nav/Nav'
import Hero from './components/layout/HeroAlt/HeroAlt';
import About from './components/layout/About/About';
import Skills from './components/layout/Skills/Skills';
import Portfolio from './components/layout/Portfolio/Portfolio';
import Education from './components/layout/Education/Education';
import Contact from './components/layout/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

import './styles/global.scss';

// create container
function App() {
  return (
    <div className="App">
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

export default App;
