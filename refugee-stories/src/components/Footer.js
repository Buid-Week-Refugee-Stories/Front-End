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
        <a className='source' title="ערן [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Blue_pencil_RTL.svg">Pencil Graphic from Wikimedia Commons</a><br />
        <a className='source' title="Designmodo http://www.designmodo.com/ [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Linecons_speech-bubble.svg">Speech Bubble Graphic from Wikimedia Commons</a>
        <p> © 2019 by Refugee Stories Group</p>
    </footer>
    )
}

export default Footer;