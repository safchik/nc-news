import { useEffect, useState } from "react";
import { getAllUsers } from "../api";
import { UserCard } from './UserCard';

const UserList = ({ setUser }) => {
    const [isLoading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(users => {
                setAllUsers(users)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {allUsers.map((user, index) => {
                return (
                    <div key={user.id}>
                        <UserCard user={user} setUser={setUser}></UserCard>
                        {index !== allUsers.length - 1 && <div style={{ marginBottom: '16px' }}></div>}
                    </div>
                );
            })}
        </div>
    );
}

export default UserList;
