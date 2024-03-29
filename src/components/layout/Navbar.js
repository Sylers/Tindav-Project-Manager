import React from  'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav className="navbar-wrapper pink lighter-3 z-depth-0">
            <div className="container">
                <Link to="/" className="brand-logo" >Tindav</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>

    )
}

export default Navbar