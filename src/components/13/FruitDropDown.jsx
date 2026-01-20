import { useState } from "react"
//13. How to display dropdown value selected by user in another textbox ?

export default function FruitDropDown() {
    const [selectedValue, setSelectedValue] = useState('')
    const handleChange = (e) => setSelectedValue(e.target.value);
    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">--Select Fruit--</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Orange">Orange</option>
            </select>
            <input type="text" value={selectedValue} readOnly />
        </div>
    )
}