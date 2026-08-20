// useEffect hook

import { useEffect, useState } from "react";

function UserListHook(){
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if (!res.ok) {
                throw new Error("Failed to fetch user details");                
            }
            return res.json();
        })
        .then((data)=>{
           setUsers(data);
           setError(null);
           setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
},[]);
console.log(users);
if (loading) {
    return <div>Loading users...</div>
}

if (error) {
    return <div>Error: {error}</div>
}

return(
    <div>
        <h2>User List</h2>
        <ul>
            { users.map((user) =>(
            <li keys={user.id}>{user.name}:{user.email}</li>)

        )}
        </ul>
        
    </div>
)
}
export default UserListHook;