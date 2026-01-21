import { useState } from "react";
//18. Create a counter component using useState ?
export default function CounterUseState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}