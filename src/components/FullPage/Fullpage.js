import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Hero from '../views/Hero/Hero';
import HeroAlt from '../views/HeroAlt/HeroAlt';

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#000', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']}
        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']}
        menu='#nav'
        render={({ state, fullpageApi }) => {
            console.log(state);
            return (
                <ReactFullpage.Wrapper>
                    <Hero text='Front-end Developer' clicked={() => fullpageApi.moveSectionDown()}/>
                    <HeroAlt/>
                    <div className='section'>
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className='section'>
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
