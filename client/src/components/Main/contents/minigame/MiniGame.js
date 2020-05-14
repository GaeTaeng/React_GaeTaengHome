import React from 'react'
import "./MiniGame.css"
import './shiritori/Shiritori'

import Shiritori from './shiritori/Shiritori'
import Numberbaseball from './numberbaseball/Numberbaseball'

export default function MiniGame() {
    return (
        <element id="MiniGame">

           
           <div className="games">
               <div>
               각 게임들은 js개발 공부를 위하여 추가한 내용들 입니다. <br/>
                재미로 이용하여 주세요 ^^ <br/><br/>
           </div>
            <Numberbaseball />
            <Shiritori />
            </div>
        </element>
    )
}