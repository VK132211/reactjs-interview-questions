import useWindowWidth from "./useWindowWidth"

export default function WindowWidthComponent() {
    const width = useWindowWidth();
    return (
        <div>
            <h2>Custom Hook Example</h2>
            <p>
                Current window width:{width}
            </p>
        </div>
    )
}