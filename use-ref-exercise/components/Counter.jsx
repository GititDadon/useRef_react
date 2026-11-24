import { useState, useRef } from 'react'

export default function Counter() {
    const [current, setCurrent] = useState(0)
    const refPrev = useRef(0)

    function handleIncrease() {
        refPrev.current = current
        setCurrent(current + 1)
    }

    function handleDecrease() {
        refPrev.current = current
        setCurrent(current - 1)
    }

    return (
        <div className="counter">
            <h2>Counter History</h2>
            <p>Track previous values</p>

            <div className="counter-values">

                <div className="counter-current">
                    <span>Current</span>
                    <strong>{current}</strong>
                </div>

                <div className="counter-previous">
                    <span>Previous</span>
                    <strong>{refPrev.current}</strong>
                </div>

            </div>

            <div className="counter-buttons">
                <button
                    className="secondary-button"
                    onClick={handleDecrease}
                >
                    -1
                </button>

                <button onClick={handleIncrease}>
                    +1
                </button>
            </div>
        </div>
    )
}