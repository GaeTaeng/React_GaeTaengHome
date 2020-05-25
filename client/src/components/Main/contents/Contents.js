import React from 'react';
import Banner from './Banner';
import Board from './board/Board';
import Home from './home/Home'
import MiniGame from './minigame/MiniGame';
import PatchNote from './PatchNote';
function Contents(props) {
    console.log(props.widthstyle);
    const Contentsstyle= {
        width: props.widthstyle === '0px' ? '0px' : '330px',
        position: 'fixed',
      };
      
    return (
        <element id="contents">
            <Banner />
            <iframe id="discord" title="discord" style={Contentsstyle} 
            src="https://discordapp.com/widget?id=658585605554307074&amp;theme=dark" 
            width="350" height="500" allowtransparency="true" frameborder="0">
                디스코드 위젯 에러!
            </iframe>
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