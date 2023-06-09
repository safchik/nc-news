import { useNavigate } from 'react-router-dom'


const Nav = ({ user, setUser }) => {

    const logout = () => {
        setUser(undefined)
    }
    const navigate = useNavigate()
    function navigateHome() {
        navigate("/");
    }

    if (user) {
        return (
            <div className="navbar">
                <button className="logoutbutton" onClick={logout}>Logout</button>
                <p>Hello, {user.name}!</p>
                <img class="avatar" src={user.avatar_url} alt="avatar" />
                <button className="homebutton" id="HomeButton" onClick={navigateHome}>Home</button>
            </div>

        )
    } else {
        return (
            <div>
                <button className="homebutton" id="HomeButton" onClick={navigateHome}>Home</button>
                <button className="signin" onClick={() => navigate('/sign-in')}>Log In</button>
                <button className="userlist" onClick={() => navigate('/allusers')}>User List</button>
            </div>)
    }

}

export default Nav;