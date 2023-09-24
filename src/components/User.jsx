import React from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeUsers = searchParams.get("filter") === "active";

    return (
        <div>
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>

            <div>
                <button onClick={() => setSearchParams({ filter: "active" })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>

            {
                (activeUsers)?<p>Showing Active Users</p>:<p>Showing All Users</p>
            }
        </div>
    )
}

export default User;