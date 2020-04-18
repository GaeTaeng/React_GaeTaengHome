import React, { useState, useEffect }  from 'react';
import './Timer.css'
let test = 0;
function Timer() {

    const [date, setDate] = useState("Wait! Timer");
    function Change() {
      setDate(new Date().toLocaleTimeString());
      //componentWIllUnmount();
    }
    useEffect(() => {
      const timeID = setInterval(
        () => Change(), 1000
      )
      return () => clearInterval(timeID);
    },[])
    return(
      <div id="timer">
        <div id="menu">{date}</div>
      </div>
    )
}

export default Timer