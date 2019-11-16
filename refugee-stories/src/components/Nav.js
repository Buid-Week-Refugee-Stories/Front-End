import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/stories'>Stories</NavLink>
        <NavLink to='/submission'>Submit a Story</NavLink>
    </nav>
    )
}

export default Nav;