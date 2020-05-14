import React from 'react';
import Banner from './Banner';
import Board from './board/Board';
import Home from './home/Home'
import MiniGame from './minigame/MiniGame';
import PatchNote from './PatchNote';
function Contents(props) {
    return (
        <element id="contents">
            <Banner />
            <div className="Checkmenus">
            {
            props.CheckMenu === "HOME" ? (<Home />) : 
            props.CheckMenu === "BOARD" ? (<Board />) :
            props.CheckMenu === "MINIGAME" ? (<MiniGame />) :
            props.CheckMenu === "PatchNote" ? (<PatchNote />) :
             <div>Start ! { props.CheckMenu } 추후 구현 예정인 메뉴입니다.</div> 
             
             }
            </div>
        </element>
    )
}


export default Contents;