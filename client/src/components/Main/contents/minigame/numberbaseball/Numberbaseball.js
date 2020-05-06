import React from 'react'
import { useState, useRef } from 'react'

import './Numberbaseball.css'
export default function Numberbaseball() {
    const [word, setWord] = useState();
    const [inputWord, setInputWord] = useState("");
    const [numArray, setNumArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [strikeArray, setStrikeArray] = useState([]);
    const [ballArray, setBallArray] = useState([]);
    const [outArray, setOutArray] = useState([]);

    const inputRef = useRef(null);
    console.log("WORLD Strike")
    console.log(strikeArray);

    function MakeNumber() {
        setNumArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        let WordArray = [];
        console.log("gd");
        for (let i = 1; i < 5;) {
            let iNum = Math.floor(Math.random() * (numArray.length - 1) + 1);
            if (numArray[iNum] === 0) {
                numArray[iNum] = i++;
                WordArray.push(iNum);
                console.log(numArray);
            }
        }
        setWord(WordArray);

        setStrikeArray([]);
        console.log("MakeNumber Strike")
        console.log(strikeArray);
        setBallArray([]);
        setOutArray([]);
    }

    if (word === undefined) {
        MakeNumber();
    }

    function CheckNumber() {
        console.log("CheckNumber start Strike")
        console.log(strikeArray);
        let arr = [0, 0, 0];
        for (let i = 0; i < 4; i++) {
            let iIdx = word.indexOf(Number(inputWord[i]));
            console.log("IDX : " + iIdx + "INPUT : " + inputWord[i]);
            switch (iIdx) {
                case i:
                    arr[0]++;
                    break;
                case -1:
                    arr[2]++;
                    break;
                default:
                    arr[1]++;
                    break;
            }
        }

        setStrikeArray(
            [
                ...strikeArray, arr[0]
            ]
        );
        console.log(arr[0]);
        setBallArray(
            [
                ...ballArray, arr[1]
            ]
        );
        setOutArray(
            [
                ...outArray, arr[2]
            ]
        );


        console.log("CheckNum : ");
        console.log(strikeArray);
        console.log(ballArray);
        console.log(outArray);
    }
    function onClickButtonAnswer() {
        CheckNumber();

    }
    function onClickButtonReset() {
        MakeNumber();
        setInputWord('');
    }
    function onChangeInput(e) {
        setInputWord(e.target.value);
    }
    function onKeyPress(e) {
        if (e.key === "Enter") {
            CheckNumber();
            setInputWord('');
        }
    }
    return (
        <element id="Numberbaseball">
            <div>숫자야구게임 ----</div>
            <div className="Numberbaseball">
                <div>현재 숫자 :: {word}</div>
                <input ref={inputRef} onKeyPress={onKeyPress} value={inputWord} onChange={onChangeInput} maxLength='4' />
                <button onClick={onClickButtonAnswer}>GO!</button>
                <button onClick={onClickButtonReset}>초기화</button>
                {console.log("MAIN Strike")}
                {console.log(strikeArray)}
                
                <div>{(strikeArray.length > 0) ? strikeArray.map((p,index) => {
                    if(p == 4) {
                        return (
                            <div>4Strike!!!! 홈런입니다 !!!!<br/>초기화 버튼을 눌러 다시 진행하여 주세요!</div>
                        )
                    }
                    return (
                        <div>{p}Strike!
                          {ballArray[index]}Ball!
                          {outArray[index]}Out!
                        </div>
                    )
                }) : "0Strike!"}
                  
                </div>
            </div>
        </element>
    )
}