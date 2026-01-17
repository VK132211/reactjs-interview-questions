import ChildComponent from "./ChildComponent"
//1. How to send the data from parent component to child component in react ?
//a. Pass Data via Props in the Parent Component
export default function ParentComponent() {
    const message = "Hello from Parent!"
    const user = { "name": "Vinay", age: 25 }
    return (
        <>
            <ChildComponent text={message} userData={user} isAdmin={false} />
        </>
    )
}