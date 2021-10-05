import React, { useState } from 'react';
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import logo from './home2.svg'
import {MdClose} from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Search from '../menu/search';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const {currentuser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try{
            await logout()
            history.push('/')
        } catch {
            alert("Failed to log out")
        }
    } 

    return ( 
        <nav className='navbar'>
            <div className='brand'> 
                <Link to='/'>
                <img className='brand-logo'
                src={logo}
                alt='Logo'/>
                </Link>
            </div>
            <button className='bars'
            onClick={()=> setSidebar(!sidebar)}><FaBars /></button>
            <div className={sidebar ? ' actives' : 'navbar-links'}>
                <button className='cross'
                onClick={()=> setSidebar(!sidebar)}><MdClose /></button>
                    <ul className='links-menu'>
                        <li>
                            {currentuser ? <Search /> : null}
                        </li>
                        <li>
                            {currentuser ? null : <Link to='/register' className='links'>Register</Link>}
                        </li>
                        <li>
                            {currentuser ? null : <Link to='/login' className='links'>Login</Link>}
                        </li>
                        <li>
                            {currentuser ?  <Link to='/favorite' className='links'>My list</Link> : null}
                        </li>
                        <li>
                            {currentuser ? <Link onClick={handleLogout}
                            className='links'>Logout</Link> : null }
                        </li>
                    </ul>
                </div>
        </nav>
     )
}
 
export default Navbar;
