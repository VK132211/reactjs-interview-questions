import { useContext } from "react"
import { UserContext } from "./UserContext"

const NavBar = () => {
    const { user } = useContext(UserContext);
    return (
        <div>Welcome, {user.name}!</div>
    )
}
export default NavBar