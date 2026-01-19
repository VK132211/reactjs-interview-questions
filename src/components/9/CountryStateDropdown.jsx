//9. Given two dropdowns, select 2nd dropdown options 
// based on value selected in one dropdown in reactjs ?
// (Load states based on country selected)

import { useState } from "react";

export default function CountryStateDropdown() {
    const countries = [
        { id: "in", name: "India" },
        { id: "us", name: "USA" },
    ];
    const states = {
        in: [
            { id: "mh", name: "Maharashtra" },
            { id: "tg", name: "Telangana" },
        ],
        us: [
            { id: "ca", name: "California" },
            { id: "ny", name: "New York" },
        ],
    }
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
    }
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    }
    return (
        <div>
            <label htmlFor="country">Country:{" "}
                <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="" >--Select Country--</option>
                    {countries.map((country) => (
                        <option value={country.id} key={country.id}>{country.name}</option>
                    ))}
                </select>
            </label>

            <br />

            <label htmlFor="state">
                <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="" >--Select State--</option>
                    {
                        selectedCountry && states[selectedCountry]?.map((state) => (
                            <option value={state.id} key={state.id}>{state.name}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}