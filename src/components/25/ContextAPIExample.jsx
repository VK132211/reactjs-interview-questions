import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import UserProvider from "./UserProvider";
//25.How to Share data between components using context api ?
export default function ContextAPIExample() {
    return (
        <UserProvider>
            <NavBar />
            <UserProfile />
        </UserProvider>
    )
}