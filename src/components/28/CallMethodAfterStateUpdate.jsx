import { useEffect, useState } from "react"

//28.How to call a method immediately after state is updated or after component is rerendered  in reactjs

//1.Use useEffect and pass the specific state variable as a dependency.

export default function CallMethodAfterStateUpdate() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count updated', count);
        yourMethod();
    }, [count])
    const yourMethod = () => console.log('Method called after state update');

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Inc</button>
        </div>
    )
}

//2. Call a method after every re-render
// Pass no dependency array to useEffect .

// useEffect(() ⇒ {
// console.log("Runs after every render");
// yourMethod()
// });