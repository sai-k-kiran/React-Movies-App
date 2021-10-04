import React, { useState, useRef } from 'react';
import './login.css'
import {useAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Login()  {
    const [values, setValues] = useState({email:'', password:''})
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const history = useHistory() 

    const handleChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setValues({...values, [input]: value})
    }
    async function handleSubmit(e){
        e.preventDefault()
		setSubmitted(true);
        try{
            setError('')
            await login( emailRef.current.value, passwordRef.current.value)
            history.push('/menu')
        } catch{
            alert('Failed to log in')
        }
    }
        return (
            <>
            <div className='loginPage'>
                <div className='diagonal'>
                    <div className='loginContent'>
                        <div className='login-form'>
                        <h2>Login</h2>
                        <hr className='underline'></hr>
                        <form className='login' onSubmit={handleSubmit}>
                            <div className='input-block' >
                                <input type='email' 
                                name='email'
                                autoComplete='off'
                                ref={emailRef}
                                onChange={handleChange} 
                                value={values.email}
                                placeholder='Email'
                                />
                                <div className='error'>
                                {submitted && !values.email ?<p className='warning'>Email can't be empty</p> : null }
                                </div>
                            </div>
                            <div className='input-block'>
                                <input type='password' 
                                name='password'
                                ref={passwordRef}
                                onChange={handleChange} 
                                value={values.password}
                                placeholder='Password'
                                />
                                <div className='error'>
                                {submitted && !values.password ?<p className='warning'>Password can't be empty</p> : null }
                                </div>
                            </div>
                            <div className='login-error'>
                                <p>{error}</p>
                            </div>
                            <button  className='submit-btn'
                            >Login</button>
                        </form>
                        <div className='register-link'>
                            Create an account <Link to='/register'
                            style={{textDecoration:'none'}}>
                                Register</Link></div>
                        </div>
                    </div> 
                </div>
            </div>
                
            </>
        )
    }
 
export default Login;