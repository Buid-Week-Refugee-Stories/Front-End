import React from 'react';
import { NavLink } from 'react-router-dom';
import RefugeeStoriesLogo from '../images/RefugeeStoriesLogo.png';

//Todo: Take out pending stories NavLink here once logging in as admin is functional.

const Nav = () => {
    return (
    <nav>
        <NavLink to='/'>
            <div className='imgContainer'>
                <img src={RefugeeStoriesLogo} className='logo' alt='home' />
            </div>
        </NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/stories'>Stories</NavLink>
        <NavLink to='/submission'>Submit a Story</NavLink>
        <NavLink to='/pending'>Pending Stories</NavLink>
    </nav>
    )
}

export default Nav;