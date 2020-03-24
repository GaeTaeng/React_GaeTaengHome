
import React from 'react';
import './App.css';

import Navigation from './components/Main/navigation/Navigation'

import Contents from './components/Main/contents/Contents'


function App(props) {
  console.log("Start App");
  return (
    <div className="App">
      <Navigation />

      <Contents />

      <div id="bottom">
        make with React_Node.js
        GaeTaeng's Home <br />
        Naver : 000000@naver.com <br />
        GMail : 000000@gmail.com <br />
      </div>

    </div>
  );
}

export default App;
