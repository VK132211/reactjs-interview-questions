// 10. How to display dynamic html data in reactjs ?


// React escapes HTML by default to prevent XSS attacks.
// dangerouslySetInnerHTML bypasses Reactʼs escaping, so only use it with trusted 
// content.
// Always sanitize user-generated HTML before rendering with 
// dangerouslySetInnerHTML .
export default function DynamicHTML({ htmlString }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    )
}