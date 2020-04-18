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
             <div>Start ! { props.CheckMenu }</div> }
        
        </div>
    )
}


export default Contents;