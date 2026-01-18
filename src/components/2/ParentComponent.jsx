import ChildComponent from "./ChildComponent";
// 2. How to call parent component method from child component in reactjs ?
export default function ParentComponent() {
    const handleChildAction = (data) => {
        console.log("Method called from child" + data);
    }
    return (
        <div>
            <ChildComponent onAction={handleChildAction} />
        </div>
    )
}