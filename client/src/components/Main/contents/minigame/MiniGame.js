import React from 'react'
import "./MiniGame.css"
import './shiritori/Shiritori'

import Shiritori from './shiritori/Shiritori'
import Numberbaseball from './numberbaseball/Numberbaseball'

export default function MiniGame() {
    return (
        <element id="MiniGame">

           
            <Shiritori />
            <Numberbaseball />
        </element>
    )
}