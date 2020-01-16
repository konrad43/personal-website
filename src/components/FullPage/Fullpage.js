import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Hero from '../views/Hero/Hero';
import HeroAlt from '../views/HeroAlt/HeroAlt';
import Skills from '../views/Skills/Skills';
import SkillsAlt from '../views/Skills2/Skills';

const colors = {
  skills: '#e1e1e1',
  skillsAlt: '#00cec9',
}

class Fullpage extends React.Component {
  state = {
    page: '',
  };
  
  handleAfterLoad = (_, dest) => this.setState({page: dest.anchor});

  render() {
    return (
      <ReactFullpage
        //fullpage options
        // debug
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#000', '#4BBFC3', colors.skills , colors.skillsAlt, '#000']}
        navigation
        anchors={[
          'top',
          'secondPage',
          'thirdPage',
          'fourthPage',
          'lastPage',
        ]}
        menu='#nav'
        afterLoad={this.handleAfterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Hero
                text='Front-end Developer'
                clicked={() => fullpageApi.moveSectionDown()}
              />
              <HeroAlt />
              <Skills />
              <SkillsAlt />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
