import { useEffect, useState } from "react";
// 8. Create a component to fetch data from api in reactjs ?
const DataFetcher = ({ apiUrl }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(apiUrl).then((response) => {
            if (!response.ok) {
                throw new Error("Network response is not ok");
            }
            return response.json();
        }).then((json) => {
            setData(json);
            setLoading(false)
        }).catch((e) => {
            setError(e.message || 'something went wrong!')
            setLoading(false);
        })
    }, [apiUrl])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default DataFetcher;