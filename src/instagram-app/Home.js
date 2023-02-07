import React, { useState } from 'react'

const Home = () => {
    const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
    return (
        <div>
            Welcome {Auth.firstname} {Auth.lastname}
        </div>
    )
}

export default Home
