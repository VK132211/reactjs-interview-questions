import { useState } from "react"
//16. Display radio button data selected by user in another textbox 
export default function RadioToTextBox() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }
    return (
        <div>
            <h3>Select Option</h3>
            <label>
                Option1:
                <input type="radio" value="Option1" checked={selectedOption === 'Option1'} onChange={handleChange} />
            </label>
            <br />
            <label>
                Option2:
                <input type="radio" value="Option2" checked={selectedOption === 'Option2'} onChange={handleChange} />
            </label>
            <br />
            <input type="text" value={selectedOption} readOnly />
        </div>
    )
}