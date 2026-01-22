//24.Give an example of optimization using useMemo ?

import { useMemo, useState } from "react";

export default function ExpensiveComponent() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const expensiveValue = useMemo(() => {
        console.log('Calculating Expensive value..');
        let total = 0;
        for (let i = 0; i < 1000000000; i++) {
            total += i;
        }
        return total;

    }, []);

    return (
        <div>
            <h2>Expensive Value:{expensiveValue}</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        </div>
    )
}
