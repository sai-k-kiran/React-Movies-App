import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='nav'>
            <div className='brand'>
                <img className='brand-logo'
                src='https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png'
                alt='Logo'/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <Link to='/register' className='links'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login' className='links'>Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
     )
}
 
export default Navbar;