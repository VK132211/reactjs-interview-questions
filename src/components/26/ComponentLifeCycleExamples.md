# 26. Which lifecycle hooks in class component are replaced with useEffect in functional components?

In React, the useEffect hook in functional components replaces several lifecycle methods from class components. Here's a clear breakdown:

## Class Component Lifecycle Methods vs useEffect

| Class Component Lifecycle Method | Equivalent with useEffect | Purpose |
|---|---|---|
| `componentDidMount()` | `useEffect(() => { ... }, [])` | Runs once after initial render (mount) |
| `componentDidUpdate()` | `useEffect(() => { ... }, [dependency])` | Runs after re-render when dependency changes |
| `componentWillUnmount()` | `useEffect(() => { return () => { ... } }, [])` | Runs cleanup code on unmount |
| `componentDidMount + componentDidUpdate` | `useEffect(() => { ... })` (no dependency array) | Runs after every render (not recommended often) |

## Examples for Better Understanding

### 1. componentDidMount

**Class Component:**
```javascript
componentDidMount() {
  console.log('Component mounted');
}
```

**Functional Component:**
```javascript
useEffect(() => {
  console.log('Component mounted');
}, []);
```

### 2. componentDidUpdate

**Class Component:**
```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevProps.count !== this.props.count) {
    console.log('Count updated');
  }
}
```

**Functional Component:**
```javascript
useEffect(() => {
  console.log('Count updated');
}, [count]);
```

### 3. componentWillUnmount

**Class Component:**
```javascript
componentWillUnmount() {
  console.log('Cleanup before unmount');
}
```

**Functional Component:**
```javascript
useEffect(() => {
  return () => {
    console.log('Cleanup before unmount');
  };
}, []);
```

## Summary

The `useEffect` hook in functional components handles:
- **Mounting** – runs once with empty dependency array `[]`
- **Updating** – runs when dependencies change
- **Unmounting** – returns cleanup function

All in one unified API depending on how you use the dependency array and cleanup function.
