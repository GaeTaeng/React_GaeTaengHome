import React, {useEffect, useState} from 'react';
import './Navigation.css';

import Timer from './Timer'
import Menu from './Menu'


function Navigation(props) {
    var MenuIdx = 1;

    const navstyle= {
      width: props.widthstyle,
      height:'92.7vh',
      position: 'fixed',
    };
  return (
    <div id="Navigation" style={navstyle}>

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