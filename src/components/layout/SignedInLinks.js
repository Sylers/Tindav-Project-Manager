import React from  'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className='right hide-on-med-and-down' id="nav-mobile">
            <li><NavLink to='/create'>Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating purple'>AS</NavLink></li>
        </ul>

    )
}

export default SignedInLinks