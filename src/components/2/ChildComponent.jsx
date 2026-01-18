export default function ChildComponent({ onAction }) {
    const handleClick = () => {
        onAction("Hello From Child");
    }
    return (
        <button onClick={handleClick}>
            Triggered From Parent
        </button>
    )
}