import React from 'react';
import { NavLink } from 'react-router-dom';
import RefugeeStoriesLogo from '../images/RefugeeStoriesLogo.png';

//Todo: Take out pending stories NavLink here once logging in as admin is functional.

const Nav = () => {
    return (
    <nav className='mainNav'>
        <NavLink to='/'>
            <div className='imgContainer'>
                <img src={RefugeeStoriesLogo} className='logo' alt='home' />
            </div>
        </NavLink>
        <a href='https://refugee-stories1119.netlify.com/index.html'>Our Mission</a>
        <a href='https://refugee-stories1119.netlify.com/team.html'>About Us</a>
        
        <NavLink to='/login' activeClassName="selected">Login</NavLink>
        <NavLink to='/stories' activeClassName="selected">Stories</NavLink>
        <NavLink to='/submission' activeClassName="selected">Submit a Story</NavLink>
        <NavLink to='/pending' activeClassName="selected">Pending Stories</NavLink>
        <NavLink to='/connect' activeClassName="selected">Connect</NavLink>
    </nav>
    )
}

export default Nav;