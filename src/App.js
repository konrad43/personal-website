import React from 'react';
import Nav from './components/layout/Nav/Nav'
import Hero from './components/views/HeroAlt/HeroAlt';
import About from './components/views/About/About';
import Skills from './components/views/Skills/Skills';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <About />
      <Skills />
    </div>
  );
}

export default App;
