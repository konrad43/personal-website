import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import TopFullpage from '../../layout/TopFullpage/TopFullpage';
import FullpageLayout from './Fullpage';

const colors = {
  skills: '#ecf0f1',
  portfolio: '#27ae60',
};

class Fullpage extends React.Component {
  state = {
    page: '',
  };

  handleAfterLoad = (_, dest) => this.setState({ page: dest.anchor });

  render() {
    return (
      <ReactFullpage
        //fullpage options
        // debug
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={[
          '#27ae60',
          '#2980b9',
          colors.skills,
          colors.portfolio,
          '#2a0273',
          '#fff',
          // '#27ae60'
        ]}
        navigation
        responsiveHeight={700}
        responsiveWidth={1140}
        anchors={[
          'top',
          'about',
          'skills',
          'portfolio',
          'education',
          'experience',
          'contact',
          'footer'
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
