//11. How to add data into useState array in functional component in react ?

import { useState } from "react";

export default function UseStateArray() {
    const [items, setItems] = useState([]);
    const addItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem])
    }
    return (
        <div>
            <button onClick={() => addItem('New Item')}>Add</button>
            <ul>
                {
                    items.map((item, idx) => (
                        <li key={idx} >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}