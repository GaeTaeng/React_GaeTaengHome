
import React from 'react';
import './App.css';

import Navigation from './components/Navigation'


function App(props) {
  
  return (
    <div className="App">
    <Navigation id="nav"/>
    <div>
      HI
    </div>

      <div id="bottom">
      GaeTaeng's Home <br/>
      Naver : 000000@naver.com <br/>
      GMail : 000000@gmail.com <br/>
      </div>
    </div>
  );
}

export default App;
