// 7. How to perform debouncing in react ?

import { useEffect, useRef, useState } from "react";

// Explanation:
// useState  Manages the immediate (
// (d
// ebouncedValue ).
// inputValue ) and debounced values 
// useRef  Stores the timer reference to clear previous timers effectively.
// useEffect  Triggers on each change to 
// inputValue , resets the debounce timer, and 
// updates 
// debouncedValue only after the specified delay 500ms).

// This technique ensures actions are performed only after the user stops typing for 
// a short period, optimizing performance and preventing unnecessary function calls

export default function Debouncing() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const handleInputChange = (e) => setInputValue(e.target.value)
    const timerRef = useRef(null);

    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, 500)
        return () => clearTimeout(timerRef.current)
    }, [inputValue])

    return (
        <div>
            <input type="text" placeholder="typing..." value={inputValue} onChange={handleInputChange} />

            <p>DebouncedValue: {debouncedValue}</p>
        </div>
    )
}