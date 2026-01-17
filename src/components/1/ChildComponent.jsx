//b. Access Props in the Child Component
export default function ChildComponent(props) {
    return (
        <>
            <h1>{props.text}</h1>
            <p>name:{props.userData.name} age:{props.userData.age}</p>
            {props.isAdmin && <button>AdminPanel</button>}
        </>
    )
}

// ChildComponent.jsx (cleaner with destructuring)
// function ChildComponent({ text, userData, isAdmin }) {
//  return (
//  <div>
//  <h1>{text}</h1>
//  <p>Name: {userData.name}, Age: {userData.age}</p>
//  {isAdmin && <button>Admin Panel</button>}
//  </div>)
// }