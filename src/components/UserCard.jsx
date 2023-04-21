import { useNavigate } from 'react-router-dom';

export const UserCard = ({ user, setUser }) => {
    const navigate = useNavigate();

    const impersonate = () => {
        setUser(user);
        navigate("/");
    };

    return (
        <div>
            <button className="impersonate" onClick={impersonate}>
                <span>Login As {user.username}</span>
            </button>
        </div>
    );
};
