import { useState, useRef, useEffect } from 'react'

//12. Change focus/enable/disable textbox in child component based on parent component button click ?
function Child({ disabled, shouldFocus }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (shouldFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [shouldFocus])
    return (
        <input ref={inputRef} type="text" disabled={disabled} placeholder={disabled ? 'Disabled' : 'Enabled'} />
    )
}

export default function FocusAndDisable() {
    const [disabled, setDisabled] = useState(true);
    const [focusRequest, setFocusRequest] = useState(false);
    const toggleDisabled = () => {
        setDisabled(prev => !prev);
    }
    const focusInput = () => {
        setFocusRequest(true);
        setTimeout(() => setFocusRequest(false), 0);
    }
    return (
        <>
            <button onClick={toggleDisabled}>{disabled ? "Enable" : "Disable"}TextBox</button>
            <button onClick={focusInput} disabled={disabled}>FocusTextBox</button>
            <Child disabled={disabled} shouldFocus={focusRequest} />
        </>
    )
}