import { useState, useEffect } from 'react';
//17. Create an error boundary component in react ?
function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const errorHandler = (error) => {
            setHasError(true);
            setError(error);
        };

        window.addEventListener('error', errorHandler);
        return () => window.removeEventListener('error', errorHandler);
    }, []);

    if (hasError) {
        return (
            <div style={{ padding: '20px', border: '1px solid red', borderRadius: '4px' }}>
                <h2>Something went wrong</h2>
                <p>{error?.message}</p>
                <button onClick={() => {
                    setHasError(false);
                    setError(null);
                }}>
                    Try again
                </button>
            </div>
        );
    }

    return children;
}

export default ErrorBoundary;


// import { ErrorBoundary } from "react-error-boundary";

// function CustomErrorBoundaryUI({ error, resetErrorBoundary}) {
//     return (
//         <div className="h-[100vh] flex justify-center items-center px-6">
//             <div role="alert"  className="alert alert-error">
//                 <p>Something went wrong:</p>
//                 <div>{error?.message}</div>
//                 <button onClick={resetErrorBoundary}>Try again</button>
//             </div>
//         </div>
        
//     )
// }

// export default function CustomErrorBoundary({ children }) {
//     return (
//         <ErrorBoundary 
//             FallbackComponent={CustomErrorBoundaryUI}
//             onReset={() => window.location.reload()}    
//         >
//             {children}
//         </ErrorBoundary>
//     )
// }