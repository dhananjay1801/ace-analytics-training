import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <ul className='navbar'>
                <li>Home</li>
                <li>Services</li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar;