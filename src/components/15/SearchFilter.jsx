import { useState } from "react"
//15. Create a search textbox filter in reactjs
export default function SearchFilter() {
    const items = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes",
        "Strawberry",
    ]
    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>
            <input type="text" value={searchTerm} placeholder="Search Fruits" onChange={e => setSearchTerm(e.target.value)} />

            <ul>
                {filteredItems.length > 0 ? (filteredItems.map((item, idx) => <li key={idx}>{item}</li>)) : (<li>No results Found!</li>)}
            </ul>

        </div>
    )
}