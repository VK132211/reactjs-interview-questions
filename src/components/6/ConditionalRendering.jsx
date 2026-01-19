// 6. How to conditionally render an element or text in react 
export default function ConditionalRendering({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please Login!</p>}
        </div>
    )
}

// function MyComponent({ showMessage }) {
// return (
// <div>
// {showMessage && <p>This message appears if true.</p>}
// </div>
// );
// }

// function MyComponent({ isAdmin }) {
// let content;
// if (isAdmin) {
// content = <p>Admin Dashboard</p>;
// } else {
// content = <p>User Dashboard</p>;
// }
// }
// return <div>{content}</div>;

// function MyComponent({ notifications }) {
// return (
// <div>
// {notifications.length  0 && <p>You have notifications!/p>}
// </div>
// );
// }