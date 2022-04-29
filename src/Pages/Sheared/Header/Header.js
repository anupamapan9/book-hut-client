import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import './Header.css'
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';
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
    const [user, loading, error] = useAuthState(auth);
    if (error) {
        toast.error(error.message)
    }
    return (
        <nav className='nav sticky top-0'>
            <Link to="/" className='nav_brand'>
                Book Shop
            </Link>
            <ul className={navActive}>
                <li className='nav-link'><Link to='/'>Home</Link></li>
                <li className='nav-link'><Link to='#'>About</Link></li>
                <li className='nav-link'><Link to='#'>Contact</Link></li>
                <li className='nav-link'><Link to='#'>Blog</Link></li>
                {
                    !user ? <li className='nav-link'><Link to='/login'>Login</Link></li>
                        : <button onClick={() => signOut(auth)}>Logout</button>
                }


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