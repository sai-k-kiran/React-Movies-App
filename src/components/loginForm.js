import React, { useState } from 'react';
import './login.css'

function Login()  {
    const [values, setValues] = useState({email:'', password:''})
    const [data, setData] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const input = e.target.name
        const value = e.target.value
        setValues({...values, [input]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
		setSubmitted(true);
        const user_data = {...values, id:new Date().getTime().toString()}
        setData([...data, user_data])
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
                            <div className='input-block'>
                                <input type='email' 
                                name='email'
                                onChange={handleChange} 
                                value={values.email}
                                />
                                <label>Email</label>
                                <div className='error'>
                                {submitted && !values.email ?<p className='warning'>Email can't be empty</p> : null }
                                </div>
                            </div>
                            <div className='input-block'>
                                <input type='password' 
                                name='password'
                                onChange={handleChange} 
                                value={values.password}
                                />
                                <label>Password</label>
                                <div className='error'>
                                {submitted && !values.password ?<p className='warning'>Password can't be empty</p> : null }
                                </div>
                            </div>
                            <button className='submit-btn'
                            >Login</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
 
export default Login;