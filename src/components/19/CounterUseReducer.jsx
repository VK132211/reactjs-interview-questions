//19. Create a counter component using useReducer ?

// const [state, dispatch] = useReducer(counterReducer, initialState);
// Provides current state and dispatch function to send actions
import { useReducer } from "react"


function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return { count: 0 }
        case 'SET_VALUE':
            return { count: action.payload }
        default:
            return state
    }
}
const initialState = { count: 0 }
export default function CounterUseReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {state.count}</h1>
            <div>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement-</button>
                <button onClick={() => dispatch({ type: 'RESET' })} style={{ margin: '0 10px' }}>RESET</button>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment+</button>
                <div style={{ marginTop: '20px' }}>

                    <input type="number" value={state.count} onChange={(e) => dispatch({ type: 'SET_VALUE', payload: Number(e.target.value) || 0 })} style={{ padding: '5px', width: '60px' }} />

                </div>
            </div>
        </div>
    )
}