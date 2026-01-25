//27. Create a popup using portal ?
import ReactDOM from 'react-dom'

const Popup = ({ children, onClose }) => {
    return (
        ReactDOM.createPortal(
            <div style={overlayStyle}>
                <div style={popupStyle}>
                    <button onClick={onClose} style={closeBtn}>X</button>
                    {children}
                </div>
            </div>, document.getElementById('popup-root'))
    )
}

const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
};
const popupStyle = {
    background: 'green',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '300px',
    position: 'relative'
};
const closeBtn = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    fontSize: '18px',
    cursor: 'pointer'
};

export default Popup;