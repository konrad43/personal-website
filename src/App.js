import React from 'react';

import LandingPage from './components/views/LandingPage/LandingPage';
import Fullpage from './components/views/Fullpage/FullpageContainer';

import './styles/global.scss';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Fullpage />
    </div>
  );
}

export default App;
