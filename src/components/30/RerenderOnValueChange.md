# Rerendering a React Component on Value Change

To re-render a React component when a value changes, the most common and recommended way is to use `useState` or `useEffect` with props/state.

## ✅ 1. Using `useState` (most common)
The component re-renders automatically when state changes.

```javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

## ✅ 2. Using `useEffect` to respond to value changes (props or state)

```javascript
import React, { useEffect, useState } from 'react';

function Watcher({ value }) {
    useEffect(() => {
        console.log('Value changed:', value);
        // This will run every time `value` changes
    }, [value]);

    return <div>Value is: {value}</div>;
}
```

If `value` is updated in a parent component, `Watcher` will re-render automatically.

## ✅ 3. Using props — re-render happens automatically if props change

```javascript
function Parent() {
    const [name, setName] = useState("John");
    return (
        <>
            <Child name={name} />
            <button onClick={() => setName("Doe")}>Change Name</button>
        </>
    );
}

function Child({ name }) {
    return <div>Hello, {name}</div>;
}
```