import { useState } from "react";

//22. Create a controlled and uncontrolled component in react ?
// {
// 1. Controlled Component
// A controlled component is one where React state controls the input value. You 
// use 
// useState or any state management to store and update the input value.}
export default function ControlledComponent() {
    const [input, setInput] = useState('');
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            <h3>Controlled Component</h3>
            <input type="text" value={input} onChange={handleChange} />
            <p>Entered input:{input}</p>
        </div>
    )
}