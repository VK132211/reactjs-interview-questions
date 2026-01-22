import { useContext } from "react"
import { UserContext } from "./UserContext"

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h2>UserProfile</h2>
            <p>Email:{user.email}</p>
            <button onClick={() => setUser({ ...user, name: 'VinayKumar' })}>Change Name</button>
        </div>

    )
}

export default UserProfile