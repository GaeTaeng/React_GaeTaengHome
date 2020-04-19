import React from 'react'
import './Shiritori.css'
import {useState, useRef } from 'react'
export default function Shiritori() {
    const [word, setWord] = useState("시작");
    const [inputWord, setInputWord] = useState("여기에 입력하여주세요!");
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    const [wordList, setWordList] = useState([]);
    let subList = [];
    function onCheckAnswer() {
        if (word[word.length - 1] === inputWord[0]) {
            setResult("정답!");
            setWord(inputWord);
            setInputWord('');
            subList.push(inputWord); 
            //console.log("정답!SUB" + subList.length);
            wordList.push(inputWord);
            //setWordList(...wordList+inputWord);
            console.log(wordList);
            //console.log("정답!" + wordList.length);
        } else {
            console.log(wordList.length);
            setResult("오답!");
            setInputWord('');
        }

        inputRef.current.focus();
    }
    function onChangeInput(e) {
        setInputWord(e.target.value);
    }
    function onClickInput() {
        setInputWord("");
    }
    function onKeyPress(e) {
        if (e.key === "Enter") {
            onCheckAnswer();
        }
    }
    return (
        <element id="Shiritori">
            <div>끝말잇기 ------</div>
            <div className = "Shiritori">
                <div>현재단어 : </div><div className="word">{word}</div>
                    <input ref={inputRef} value={inputWord} onChange={onChangeInput} onClick={onClickInput} onKeyPress={onKeyPress} maxLength='4' minLength='2'/>
                    <button onClick={onCheckAnswer}>PASS!</button>
                <div>{result}</div>
                <div>정답 개수 : {wordList.length}</div>
               <div>
                {wordList ? wordList.map( p => {
                    return (
                        <div>{p}</div>
                    )
                }
                ) : "정답이 없습니다."}
                </div>
            </div>
        </element>
    )
}