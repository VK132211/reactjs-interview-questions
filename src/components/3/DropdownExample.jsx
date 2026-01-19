import { useState } from "react";
// 3.How to bind array/array of objects to dropdown in react ?
export default function DropdownExample() {
    const fruits = ['apple', 'banana', 'cherry'];
    const countries = [{ id: 1, name: 'India' }, { id: 2, name: 'UK' }, { id: 3, name: 'US' }]
    const [selectedFruit, setSelectedFruit] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    return (
        <div>
            <select value={selectedFruit} onChange={(e) => setSelectedFruit(e.target.value)}>
                <option value="" disabled>Select Fruit</option>
                {fruits.map((fruit, index) => (
                    <option value={fruit} key={index}>{fruit}</option>
                ))}
            </select>
            <p>SectedFruit:{selectedFruit}</p>

            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="" disabled>Select Country</option>
                {
                    countries.map((country) => (
                        <option value={country.name} key={country.id}>{country.name}</option>
                    ))
                }
            </select>
            <p>SelctedCountry:{selectedCountry}</p>
        </div>
    )
}