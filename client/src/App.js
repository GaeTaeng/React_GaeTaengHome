
import React, {useEffect, useState} from 'react';
import './App.css';

import Navigation from './components/Main/navigation/Navigation'

import Contents from './components/Main/contents/Contents'


function App(props) {
  const [state, setState] = useState("HOME");
  const [_width, setWidth] = useState('180px');
  const [_position, setPosition] = useState('absolute');
 

  console.log("Start App");
  var CheckMenu = (iNum) => {
    setState(iNum);
  }

  const onScreenCheck = () => {
    const screenwidth = window.innerWidth;
    console.log(screenwidth);
    let screenSize = screenwidth < 800 ? setWidth('0px') : setWidth('180px');
    screenSize = screenwidth < 800 ? setPosition('fixed') : setPosition('absolute');
  }

  useEffect(() => {
    onScreenCheck();
    console.log("CHECK SCREEN SIZE")
    window.addEventListener('resize', onScreenCheck);
}, [])

  return (
    <div className="App">
      
      {//<Navigation CheckMenu = {CheckMenu}  widthstyle = {_width} positionstyle={_position}/>
}
      <Navigation CheckMenu = {CheckMenu}  widthstyle = {_width}/>
      
      <Contents CheckMenu = {state} widthstyle = {_width}/>
      
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
