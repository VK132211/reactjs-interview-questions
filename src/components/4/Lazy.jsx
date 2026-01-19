import { lazy, Suspense } from "react"

// lazy  This function allows you to dynamically import a component.
// Suspense  Wraps lazy-loaded components and provides a fallback UI (e.g., a 
// spinner or loader) while the component loads.
export default function Lazy() {
    const LazyMyComponent = lazy(() => import('./MyComponent'));
    return (
        <div>
            <h1>Main Component</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyMyComponent />
            </Suspense>
        </div>
    )
}