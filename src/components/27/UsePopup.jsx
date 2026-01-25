import { useState } from "react"
import Popup from "./PopUp"

export default function UsePopup() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div>
            <h1>React Portal Popup</h1>
            <button onClick={() => setShowPopup(true)}>Open Popup</button>
            {
                showPopup && (
                    <Popup onClose={() => setShowPopup(false)}>
                        <h2>This is a Poratl Popup!</h2>
                        <p>You can close it by clicking X button.</p>
                    </Popup>
                )
            }
        </div>
    )
}