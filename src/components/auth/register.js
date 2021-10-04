import React, { useRef, useState } from 'react';
import './login.css';
import {useAuth} from './AuthContext'
import {useHistory} from 'react-router-dom'

function Register()  {
    const [values, setValues] = useState({name:'', email:'', password:'', confirm: ''})
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
    const {signup} = useAuth()
    const history = useHistory() 

    const handleChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setValues({...values, [input]: value})
    }
    async function handleSubmit(e) {
        e.preventDefault()
		setSubmitted(true);
 
        try{
            setError('')
            setLoading(true)
            await signup( emailRef.current.value, passwordRef.current.value)
            history.push('/menu')
        } catch{
            alert('Failed to create an account')
        }
        setLoading(false)
    }
     return (
            <>
            <div className='loginPage'>
                <div className='diagonal'>
                    <div className='loginContent'>
                        <div className='register-form'>
                        <h2>Register</h2>
                        <hr className='underline'></hr>
                        <form className='register' onSubmit={handleSubmit}>
                            <div className='input-block'>
                                <input type='text'
                                name='name' 
                                autoComplete='off'
                                ref={nameRef}
                                onChange={handleChange} 
                                value={values.name}
                                placeholder='Name'
                                />
                                <div className='error'>
                                {submitted && !values.name ?<p className='warning'>Name can't be empty</p> : null }
                                </div>
                            </div>
                            <div className='input-block'>
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
                            <div className='input-block'>
                                <input type='password' 
                                name='confirm'
                                ref={confirmRef}
                                onChange={handleChange} 
                                value={values.confirm}
                                placeholder='Confirm Password'
                                />
                                <div className='error'>
                                {submitted && values.confirm !== values.password ? <p className='warning'>Passwords do not match</p> : null }
                                </div>
                            </div>
                            {submitted && values.confirm !== values.password ? null : <div className='login-error'>
                                <p>{error}</p>
                                </div>}
                            <button disabled={loading}
                            className='submit-btn'
                            >Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>  
            </>
        )
    }
 
export default Register;