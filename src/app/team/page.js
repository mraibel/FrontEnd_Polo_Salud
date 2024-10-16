'use client'

import { useEffect, useState } from "react"
import { fetchUsers } from "../lib/data"

export default function Page () {

    const [users, setUser] = useState([])

    useEffect(() => {
        fetchUsers().then((data) => setUser(data)).catch((e) => console.log(e))
    }, [])

    return(
        <div>
            {
                users.length <= 0
                    ? <p>cargando...</p>
                    : users.map((user) => {
                        return (
                            <>
                                <p>{user.name}</p>
                                <p>{user.lastName}</p>
                                <p>{user.email}</p>
                                <p>{user.password}</p>
                                <br/>
                            </>
                        )
                    })
            }
        </div>
    )
}