import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


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
        sectionsColor={['#1abc9c', '#4BBFC3', colors.skills , colors.skillsAlt, '#000']}
        navigation
        anchors={[
          'top',
          'about',
          'skills',
          'education',
          'contact',
        ]}
        menu='#nav'
        afterLoad={this.handleAfterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {this.props.children}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
