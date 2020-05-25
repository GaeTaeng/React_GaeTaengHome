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
    const [numberArray, setnumberArray] = useState([]);
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
        numberArray.push(inputWord);
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
        inputRef.current.focus();

    }
    function onClickButtonReset() {
        MakeNumber();
        setInputWord('');
    }
    function onChangeInput(e) {
        setInputWord(e.target.value);
        inputRef.current.focus();
    }
    function onKeyPress(e) {
        if (e.key === "Enter") {
            CheckNumber();
            setInputWord('');
        }
    }
    function onClickButtonexplains(e) {
        alert("\
랜덤한 중복되지않는 숫자 4자리가 지정될겁니다.(ex 1245)\n\
(그 4자리 숫자의 위치까지 정확히 맞추면 정답!)\n\
예상하는 숫자를 입력한 후 GO! 클릭\n\
- 같은자리 같은 숫자면 Strike!\n\
- 다른자리 같은 숫자면 Ball!\n\
- 다른자리 없는 숫자면 Out!\n\
ex)(1245기준)1437 입력시 \n\
1Strike! 1Ball! 2Out!\
")
    }
    return (
        <element id="Numberbaseball">
            <div>숫자야구게임 ----</div>
            <div className="Numberbaseball">
                <input ref={inputRef} onKeyPress={onKeyPress} value={inputWord} onChange={onChangeInput} maxLength='4' />
                <button onClick={onClickButtonAnswer}>GO!</button>
                <button onClick={onClickButtonReset}>초기화</button>
                <button onClick={onClickButtonexplains}>설명서</button>
                {console.log("MAIN Strike")}
                {console.log(strikeArray)}
                
                <div>{(strikeArray.length > 0) ? strikeArray.map((p,index) => {
                    if(p === 4) {
                        return (
                            <div>정답 숫자 :: {word} 4Strike!!!! 홈런입니다 !!!!<br/>초기화 버튼을 눌러 다시 진행하여 주세요!</div>
                        )
                    }
                    return (
                        <div>{p}Strike!
                          {ballArray[index]}Ball!
                          {outArray[index]}Out!
                          &sol;&sol;&sol;   {numberArray[index]}
                        </div>
                    )
                }) : "0Strike!"}
                  
                </div>
            </div>
        </element>
    )
}