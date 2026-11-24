import { useState } from "react";

export default function  Timer(){
    const [seconds,setSeconds]=useState(0);
    const [intervalId,setIntervalId]=useState(null);

    function handleStart(){
        if (intervalId !== null) return

       const id= setInterval(()=>{
         setSeconds(prev=>prev+1)
    },1000);
        setIntervalId(id)
    }
    function handleEnd(){
        if (intervalId === null) return
        clearInterval(intervalId);
        setIntervalId(null);


    }
   
    return (
    <div className="timer">
        <h2>Timer with useState</h2>
        <p>Start and stop your timer.</p>

        <div className="timer-display">
            <span>Seconds</span>
            <strong>{seconds}</strong>
        </div>

        <div className="timer-buttons">
            <button onClick={handleStart}>Start</button>

            <button
                className="secondary-button"
                onClick={handleEnd}
            >
                Stop
            </button>
        </div>
    </div>
)
}