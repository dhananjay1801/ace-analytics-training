import React from 'react'
import useUsers from "../hooks/useUsers";

const CustomHook = () => {
    const {users, loading} = useUsers();

    if(loading){
        return <h1>Loading.....</h1>
    }

  return (
    <div>
        {users.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default CustomHook