import { useState, useRef } from 'react'
import Input from '../components/Input.jsx'
import TextBox from '../components/TextBox.jsx'
import Counter from '../components/Counter.jsx'
import Timer from '../components/Timer.jsx'
import TimerRef from '../components/TimerRef.jsx'
import './App.css'

function App() {
    const [text, setText] = useState('')
    const refName = useRef(null)
    const textBoxRef = useRef(null)

    return (
        <div className="container">

            <header className="header">
                <span className="subtitle">
                    REACT HOOKS LAB
                </span>
                <h1>React Playground</h1>
                <p>Practice useState & useRef</p>
            </header>

            <div className="exercises-grid">

                {/* Exercise 01 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 01
                    </span>

                    <h2>Using useState</h2>
                    <p>Controlled input</p>

                    <Input
                        value={text}
                        setText={setText}
                    />

                    <button onClick={() => setText('')}>
                        Clear Text
                    </button>
                </section>

                {/* Exercise 02 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 02
                    </span>

                    <h2>Using useRef</h2>
                    <p>Uncontrolled input</p>

                    <input
                        type="text"
                        ref={refName}
                        placeholder="Enter text..."
                    />

                    <button
                        onClick={() => refName.current.value = ''}
                    >
                        Clear Text
                    </button>
                </section>

                {/* Exercise 03 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 03
                    </span>

                    <h2>Ref to Child</h2>
                    <p>Read a child input</p>

                    <TextBox inputRef={textBoxRef} />

                    <button
                        onClick={() => alert(textBoxRef.current.value)}
                    >
                        Show Text
                    </button>
                </section>

                {/* Exercise 04 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 04
                    </span>

                    <Counter />
                </section>

                {/* Exercise 05 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 05
                    </span>

                    <Timer />
                </section>

                {/* Exercise 06 */}

                <section className="exercise-card">
                    <span className="exercise-number">
                        EXERCISE 06
                    </span>

                    <TimerRef />
                </section>

            </div>

            <footer>
                Learn. Practice. Build.
            </footer>

        </div>
    )
}

export default App