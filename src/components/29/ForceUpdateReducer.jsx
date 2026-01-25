//29. How to Force a component to rerender with out using useState in react ?

//To force a React component to re-render without using useReducer or 
// useRef +forceUpdate trick
import { useReducer } from "react";

const force = (x) => x + 1;
export default function ForceUdpateReducer() {
    const [state, forceUpdate] = useReducer(force, 0)
    return (
        <div>
            <p>Component Content:{state}</p>
            <button onClick={forceUpdate}>ForceUpdate</button>
        </div>
    )
}

// function MyComponent() {
// const renderCount = useRef(0);
// const [, forceRerender] = React.useReducer((x) ⇒ x + 1, 0);
// const handleClick = () ⇒ {
// renderCount.current++;
// forceRerender();
// };
// }
// return (
// <div>
// <p>Render Count: {renderCount.current}</p>
// <button onClick={handleClick}>Force Rerender</button>
// </div>
// );
// }