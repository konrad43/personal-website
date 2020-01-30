import React from 'react';
import Nav from '../../layout/Nav/NavFullpage';
import NavMobile from '../../features/NavMobile/NavMobile';
// import Hero from '../../layout/HeroAlt/HeroAlt';
import About from '../../layout/About/AboutFullpage';
import Skills from '../../layout/Skills/Skills';
import Portfolio from '../../layout/Portfolio/Portfolio';
import Education from '../../layout/Education/EducationFullpage';
import Contact from '../../layout/Contact/ContactFullpage';
import Footer from '../../layout/Footer/Footer';

import Fullpage from './FullpageContainer';
import TopFullpage from '../../layout/TopFullpage/TopFullpage';

import { education, experience } from '../../../data/data.json';

const FullpageLayout = ({ fullpageApi, state }) => (
  <React.Fragment>
    <TopFullpage clicked={() => fullpageApi.moveSectionDown()} />
    <About />
    <div className='section'>
      <Skills fullpage />
    </div>
    <div className='section'>
      <Portfolio fullpage />
    </div>
    <div className='section'>
      <Education fullpage data={education} title='Education' />
    </div>
    <div className='section'>
      <Education fullpage data={experience} title='Experience' />
    </div>
    <div className='section'><Contact /></div>
    <div className='section fp-auto-height'>
      <Footer />
    </div>
    {window.innerWidth > 676 ? <Nav state={state} /> : <NavMobile />}
    
  </React.Fragment>
);

export default FullpageLayout;
