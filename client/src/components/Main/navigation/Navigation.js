import React from 'react';
import './Navigation.css';

import Timer from './Timer'
import Menu from './Menu'
function Navigation() {
  return (
    <div id="Navigation">
      <Timer />
      <div id="MenuList">

        <Menu
          Address="/"
          Content="HOME"
        />
        <hr />
        <Menu
          Address="/"
          Content="PROFILE"
        />
        <hr />
        <Menu
          Address="https://github.com/GaeTaeng?tab=repositories"
          Content="Github"
        />
        <hr />
        <Menu
          Address="https://www.linkedin.com/in/tae-hun-kim-434552168/"
          Content="LinkedIn"
        />
        <hr />
        <Menu
          Address="/"
          Content="이력서"
        />
        <hr />
        <Menu
          Address="/"
          Content="게시판"
        />

      </div>
    </div>
  )
}


export default Navigation