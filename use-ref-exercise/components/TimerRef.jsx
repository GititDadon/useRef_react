import { useState, useRef, useEffect } from 'react'

export default function TimerRef() {
    const [seconds, setSeconds] = useState(0)
    const intervalIdRef = useRef(null)

    function handleStart() {
        if (intervalIdRef.current !== null) return

        const id = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        intervalIdRef.current = id
    }

    function handleEnd() {
        if (intervalIdRef.current === null) return

        clearInterval(intervalIdRef.current)

        intervalIdRef.current = null
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalIdRef.current)
            intervalIdRef.current = null
        }
    }, [])

    return (
        <div className="timer">
            <h2>Timer with useRef</h2>
            <p>Start and stop your timer.</p>

            <div className="timer-display">
                <span>Seconds</span>
                <strong>{seconds}</strong>
            </div>

            <div className="timer-buttons">
                <button onClick={handleStart}>
                    Start
                </button>

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