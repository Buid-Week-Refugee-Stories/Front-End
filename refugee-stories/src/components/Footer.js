import React from 'react';
import { NavLink } from 'react-router-dom';
import RefugeeStoriesLogo from '../images/RefugeeStoriesLogo.png';

//Todo: Take out pending stories NavLink here once logging in as admin is functional.

const Footer = () => {
    return (
    <footer>
        <nav className='footerNav'>
            <NavLink to='/' activeClassName="selected">Home</NavLink>
            <NavLink to='/about' activeClassName="selected">About Us</NavLink>
            <NavLink to='/login' activeClassName="selected">Login</NavLink>
            <NavLink to='/stories' activeClassName="selected">Stories</NavLink>
            <NavLink to='/submission' activeClassName="selected">Submit a Story</NavLink>
            <NavLink to='/pending' activeClassName="selected">Pending Stories</NavLink>
        </nav>

        <div className="imgContainer">
            <img src={RefugeeStoriesLogo} alt='logo' />
        </div>

        <p> © 2019 by Refugee Stories Group</p>
    </footer>
    )
}

export default Footer;