import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import TopFullpage from '../../layout/TopFullpage/TopFullpage';
import FullpageLayout from './Fullpage';

const colors = {
  skills: '#ecf0f1',
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
        sectionsColor={['#1abc9c', '#2980b9', colors.skills , colors.skillsAlt, '#fff', '#8e44ad']}
        navigation
        anchors={[
          'top',
          'about',
          'skills',
          'portfolio',
          'education',
          // 'contact',
        ]}
        menu='#nav'
        afterLoad={this.handleAfterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <FullpageLayout state={state} fullpageApi={fullpageApi} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
