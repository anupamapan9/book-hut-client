import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [navActive, setNavActive] = useState("nav-menu")
    const [toggleIcon, setToggleIcon] = useState('nav-toggler')
    const navToggler = () => {
        navActive === 'nav-menu' ?
            setNavActive('nav-menu nav-active')
            : setNavActive('nav-menu')

        toggleIcon === 'nav-toggler'
            ? setToggleIcon('nav-toggler toggle') :
            setToggleIcon('nav-toggler')
    }
    return (
        <nav className='nav'>
            <Link to="/" className='nav_brand'>
                Book Shop
            </Link>
            <ul className={navActive}>
                <li className='nav-link'><Link to='#'>Home</Link></li>
                <li className='nav-link'><Link to='#'>About</Link></li>
                <li className='nav-link'><Link to='#'>Contact</Link></li>
                <li className='nav-link'><Link to='#'>Blog</Link></li>
                <li className='nav-link'><Link to='#'>Login</Link></li>
            </ul>
            <div onClick={navToggler} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>

        </nav>
    );
};

export default Header;