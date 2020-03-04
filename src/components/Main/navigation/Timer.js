import React, { useState }  from 'react';
import './Timer.css'

function Timer() {

    const [date, setDate] = useState("Wait! Timer");
    let timeID;
    function Change() {
      setDate(new Date().toLocaleTimeString());
      componentWIllUnmount();
    }
    function componentDidMount() {
      timeID = setInterval(
        () => Change(), 1000
      )
    }
    
function componentWIllUnmount() {
    clearInterval(timeID)
  }
    return(
      <div id="timer">
        <div id="menu">{date}{componentDidMount()}</div>
      </div>
    )
}

export default Timer