import React, { useState } from 'react';
import useExternalScripts from '../useExternalScripts';
import Custom from './js/script';

const Home = () => {           
    const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
    return (
        <div>
            Welcome {Auth.firstname} {Auth.lastname}
        </div>
    )
}

export default Home
