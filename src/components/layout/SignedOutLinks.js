import React from  'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className='right hide-on-med-and-down' id="nav-mobile">
            <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
            <li><NavLink to='/Signin'>Login</NavLink></li>
        </ul>

    )
}

export default SignedOutLinks