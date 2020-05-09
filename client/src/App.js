
import React from 'react';
import './App.css';

import Navigation from './components/Main/navigation/Navigation'

import Contents from './components/Main/contents/Contents'

import { useState } from 'react';

function App(props) {
  const [state, setState] = useState("HOME");

  console.log("Start App");
  var CheckMenu = (iNum) => {
    setState(iNum);
  }

  return (
    <div className="App">
      <Navigation CheckMenu = {CheckMenu}/>
      <Contents CheckMenu = {state}/>
      
      {/* <Contents /> */}
      
      <div id="bottom">
        make with React_Node.js
        GaeTaeng's Home <br />
        Naver : nuckly@naver.com <br />
        GMail : nuckly60@gmail.com <br />
      </div>

    </div>
  );
}

export default App;
