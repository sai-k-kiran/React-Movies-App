import React from 'react';
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Search from '../menu/search';

const Sidebar = () => {
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
        <>
         <div className='nav-links'>
                <ul className='responsive'>
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
        </>
     )
}
 
export default Sidebar;