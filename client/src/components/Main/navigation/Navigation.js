import React from 'react';
import './Navigation.css';

import Timer from './Timer'
import Menu from './Menu'
function Navigation(props) {
    var MenuIdx = 1;
  return (
    <div id="Navigation">
      <Timer />
      <div id="MenuList">

        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="HOME"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="PROFILE"
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
          Content="테트리스"
          CheckMenu = {props.CheckMenu}
        />
        <hr />
        <Menu
          MenuIdx={MenuIdx++}
          Address="/"
          Content="게시판"
          CheckMenu = {props.CheckMenu}
        />

      </div>
    </div>
  )
}


export default Navigation