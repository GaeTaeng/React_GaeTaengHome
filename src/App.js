
import React from 'react';
import './App.css';

import Navigation from './components/Main/navigation/Navigation'

import Contents from './components/Main/contents/Contents'

function App(props) {

  return (
    <div className="App">
      <Navigation />

      <Contents />

      <div id="bottom">
        GaeTaeng's Home <br />
        Naver : 000000@naver.com <br />
        GMail : 000000@gmail.com <br />
      </div>

    </div>
  );
}

export default App;
