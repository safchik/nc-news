import { useNavigate } from 'react-router-dom'

const Nav = ({ user, setUser }) => {

    const logout = () => {
        setUser(undefined)
    }
    const navigate = useNavigate()
    if (user) {
        return (
            <div className='navbar'>
                <p>{user.name}</p>
                <img class="avatar" src={user.avatar_url} />
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (<div className='navbar'><button onClick={() => navigate('/sign-in')}>Sign In</button></div>)
    }

}

export default Nav;