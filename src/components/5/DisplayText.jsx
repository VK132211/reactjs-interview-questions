// 5. How to display data entered by the user in another textbox ?


import { useState } from "react";

export default function DisplayText() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="enter something..." value={inputValue} onChange={handleChange} />
            <br />
            <br />

            <input type="text" value={inputValue} placeholder="Displayed value..." readOnly />
        </div>
    )
}