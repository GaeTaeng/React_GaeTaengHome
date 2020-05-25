import React from 'react';
import './Home.css'
let gifsrc = require('./gaetaeng.gif');
export default function Home() {
    return(
        <element id="home">
            
        <div className="homeGroup">
            <div className="FOOOOO">공 사 중 !</div>
            <img src={gifsrc} className="gaetaenggif"/>
            <div className="taeng">Welcome GaeTaeng's House!</div> <br />
            HOME 메인 화면입니다!<br/>나중에 따로 설계하여 구현 예정인 페이지입니다. <br />
            React.js + express + google cloud platform 을 통하여 구현&amp;배포를 진행중입니다. <br />
            
        </div>
        
        </element>
    )
}

