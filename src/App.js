import React from 'react';
// import logo from './logo.svg';
import Fullpage from './components/FullPage/Fullpage';
import Nav from './components/layout/Nav/Nav'
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Fullpage />
      <Nav />
    </div>
  );
}

export default App;
