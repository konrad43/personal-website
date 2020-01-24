import React from 'react';
import Nav from '../../layout/Nav/NavFullpage';
// import Hero from '../../layout/HeroAlt/HeroAlt';
import About from '../../layout/About/AboutFullpage';
import Skills from '../../layout/Skills/Skills';
import Portfolio from '../../layout/Portfolio/Portfolio';
import Education from '../../layout/Education/Education';
// import Contact from '../../layout/Contact/Contact';
// import Footer from '../../layout/Footer/Footer';

import Fullpage from './FullpageContainer';
import TopFullpage from '../../layout/TopFullpage/TopFullpage';

const FullpageLayout = ({fullpageApi, state}) => (
  <React.Fragment>
    <TopFullpage clicked={() => fullpageApi.moveSectionDown()} />
    <About />
    <div className='section'><Skills fullpage/></div>
    <div className='section'><Portfolio fullpage/></div>
    <div className='section'><Education fullpage/></div>
    <div className='section'></div>
    <Nav state={state}/>
  </React.Fragment>
);

export default FullpageLayout;
