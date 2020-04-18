import React from 'react'
import {useState} from 'react'

import './Numberbaseball.css'
export default function Numberbaseball() {
    const [word, setWord] = useState();

    function MakeNumber() {
        let numArray = [0,0,0,0,0,0,0,0,0,0];
        let WordArray = [];
        console.log("gd");
        for(let i = 1; i < 5; ) {
            let iNum = Math.floor(Math.random()*10);
            if(numArray[iNum] === 0) {
                numArray[iNum] = i++;
                WordArray.push(iNum);
            }
        }
        setWord(WordArray);
    }

    if(word === undefined) {
        MakeNumber();
    }

    function CheckNumber(e) {
        for(let i = 0; i < 4; i++) {

        }
    }
    function onClickButton() {

    }
    return(
        <element id = "Numberbaseball">
            <div>현재 숫자 :: {word}</div>
            <input />
            <button>GO!</button>
        </element>
    )
}