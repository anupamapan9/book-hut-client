import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import './Header.css'
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
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
            <Link to="/" className='nav_brand inline-block mt-7'>
                <img src="https://i.ibb.co/RCFtSgD/Book-Hut-1-removebg-preview.png" className='w-32 md:w-52' alt="" />
            </Link>
            <ul className={navActive}>
                <li className='nav-link'><CustomLink className='pb-1' to='/'>Home</CustomLink></li>
                <li className='nav-link'><CustomLink className='pb-1' to='/blog'>Blog</CustomLink></li>


                {
                    !user ?
                        <li className='nav-link'><CustomLink className='pb-1' to='/login'>Login</CustomLink></li>
                        :
                        <>
                            <li className='nav-link'><CustomLink className='pb-1' to='/add-items'>Add Items</CustomLink></li>
                            <li className='nav-link'><CustomLink className='pb-1' to='/manage-items'>Manage Item</CustomLink></li>  <li className='nav-link'><CustomLink className='pb-1' to='/my-items'>My Items</CustomLink></li>
                            <button className='nav-link' onClick={() => signOut(auth)}>Logout</button>
                        </>
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