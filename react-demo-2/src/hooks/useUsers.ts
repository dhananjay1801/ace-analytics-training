import { useEffect, useState } from "react";

function useUsers(){
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchUsers(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()

            setUsers(data)
            setLoading(false)
        }
        fetchUsers()
    },[])
    return {users, loading}
}

export default useUsers;