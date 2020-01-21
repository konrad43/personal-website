import React from 'react';
import Nav from './components/layout/Nav/Nav'
import Hero from './components/views/HeroAlt/HeroAlt';
import About from './components/views/About/About';
import Skills from './components/views/Skills/Skills';
import Portfolio from './components/views/Portfolio/Portfolio';
import Education from './components/views/Education/Education';

import './styles/global.scss';

// create container
function App() {
  return (
    <div className="App">
      <Hero />
    <div className="container">
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Nav />
    </div>
    </div>
  );
}

export default App;
