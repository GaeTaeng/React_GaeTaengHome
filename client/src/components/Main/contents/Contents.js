import React from 'react';
import Banner from './Banner';
import Board from './board/Board';
import Home from './home/Home'
import MiniGame from './minigame/MiniGame'
function Contents(props) {
    return (
        <div>
            <Banner />
            {
            props.CheckMenu === "HOME" ? (<Home />) : 
            props.CheckMenu === "BOARD" ? (<Board />) :
            props.CheckMenu === "MINIGAME" ? (<MiniGame />) :
             <div>Start ! { props.CheckMenu } 추후 구현 예정인 메뉴입니다.</div> }
        
        </div>
    )
}


export default Contents;