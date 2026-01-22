//21.Create a pure component in reactjs ?

import React from "react";

// Pure Component in React is a component that doesnʼt re-render unless its props or state actually change.
//The component to memoize.
// Lets you skip re-rendering a component when its props are unchanged.
const PureCounter = React.memo(({ count }) => {
    console.log('CounterRendered');
    return <h1>Count:{count}</h1>

})

export default PureCounter;