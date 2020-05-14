import React, {useEffect, useState} from 'react';
import './Navigation.css';

import Timer from './Timer'
import Menu from './Menu'


function Navigation(props) {
    var MenuIdx = 1;
    const [_width, setWidth] = useState('180px');
    const [_position, setPosition] = useState('absolute');
    const navstyle= {
      width: _width,
      height:'92.7vh',
      position:_position,
    };
    
    const onScreenCheck = () => {
      const screenwidth = window.innerWidth;
      console.log(screenwidth);
      let screenSize = screenwidth < 800 ? setWidth('0px') : setWidth('180px');
      screenSize = screenwidth < 800 ? setPosition('fixed') : setPosition('absolute');
    }

    useEffect(() => {
      onScreenCheck();
      window.addEventListener('resize', onScreenCheck);
  }, [])

  return (
    <div id="Navigation" style = {navstyle}>

      <Timer />
      <div id="MenuList">

        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="HOME"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        {/* <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="PROFILE"
          CheckMenu = {props.CheckMenu}
        />
        <hr /> */}
        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="MINIGAME"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="BOARD"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
          MenuIdx={MenuIdx++}
          Address="https://github.com/GaeTaeng?tab=repositories"
          Content="Github"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
          MenuIdx={MenuIdx++}
          Address="https://www.linkedin.com/in/tae-hun-kim-434552168/"
          Content="LinkedIn"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
        MenuIdx={MenuIdx++}
        Address="/"
        Content="PatchNote"
        CheckMenu = {props.CheckMenu}
      />

      </div>
    </div>
  )
}


export default Navigation