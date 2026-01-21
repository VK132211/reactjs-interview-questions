import { useEffect, useState } from "react"
//20. How to call a method on every rerender of a component ?

//To call a method on every re-render of a React component, you use the useEffect hook without a dependency array.
export default function ReRenderExample() {
    const [count, setCount] = useState(0);
    const logMessage = () => {
        console.log('Component Rerendered.CurrentCount:', count);

    }
    useEffect(() => {
        logMessage();
    })
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={setCount(count + 1)}>Inc</button>
        </div>
    )
}