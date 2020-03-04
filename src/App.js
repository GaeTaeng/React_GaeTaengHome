
import React from 'react';
import './App.css';

import Navigation from './components/Main/navigation/Navigation'
import Banner from './components/Main/contents/Banner'

function App(props) {

  return (
    <div className="App">
      <Navigation id="nav" />


      <div id="bottom">
        GaeTaeng's Home <br />
        Naver : 000000@naver.com <br />
        GMail : 000000@gmail.com <br />
      </div>
      <Banner id="banner" />

    </div>
  );
}

export default App;
