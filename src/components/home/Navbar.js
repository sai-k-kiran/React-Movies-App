import React from 'react';
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Search from '../menu/search';
import logo from './home2.svg'

const Navbar = () => {
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
        <nav className='nav'>
            <div className='brand'> 
                <Link to='/'>
                <img className='brand-logo'
                src={logo}
                alt='Logo'/>
                </Link>
            </div>
            <div className='nav-links'>
                <ul>
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
                        {currentuser ? <button onClick={handleLogout}
                        className='links btn' type='button'>Logout</button> : null }
                    </li>
                </ul>
            </div>
        </nav>
     )
}
 
export default Navbar;