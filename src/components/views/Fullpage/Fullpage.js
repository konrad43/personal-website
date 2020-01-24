import React from 'react';
// import Nav from '../../layout/Nav/Nav'
// import Hero from '../../layout/HeroAlt/HeroAlt';
// import About from '../../layout/About/About';
// import Skills from '../../layout/Skills/Skills';
// import Portfolio from '../../layout/Portfolio/Portfolio';
// import Education from '../../layout/Education/Education';
// import Contact from '../../layout/Contact/Contact';
// import Footer from '../../layout/Footer/Footer';

import Fullpage from './FullpageContainer';
import TopFullpage from '../../layout/TopFullpage/TopFullpage';

const FullpageLayout = ({fullpageApi}) => (
  <React.Fragment>
    <TopFullpage clicked={() => fullpageApi.moveSectionDown()} />

    <div className='section'>lala</div>
  </React.Fragment>
);

export default FullpageLayout;
