//2. Uncontrolled Component
// An uncontrolled component is one where the DOM controls the input value, and
// you access it using a
// ref .

import { useRef } from "react"

export default function UnControlledComponent() {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        alert('EnteredName:' + inputRef.current.value)
    }
    return (
        <div>
            <h3>Uncontrolled Component</h3>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Show Value</button>
        </div>
    )
}