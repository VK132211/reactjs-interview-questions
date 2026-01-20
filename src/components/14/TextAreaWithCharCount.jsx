import { useRef, useState } from "react";

//14. How to display number of characters remaining functionality for textarea using react useRef?
export default function TextAreaWithCharCount() {
    const maxLength = 100;
    const textAreaRef = useRef(null);
    const [remaining, setRemaining] = useState(maxLength);
    const handleChange = () => {
        const length = textAreaRef.current.value.length;
        setRemaining(maxLength - length);
    }
    return (
        <div>
            <textarea
                ref={textAreaRef}
                maxLength={maxLength}
                onChange={handleChange}
                rows={4}
                cols={40}
            />
            <div>{remaining} characters remaining</div>
        </div>
    )
}