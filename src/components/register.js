import React, { useState } from 'react';
import './login.css';

function Register()  {
    const [values, setValues] = useState({name:'', email:'', password:''})
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
                        <div className='register-form'>
                        <h2>Register</h2>
                        <hr className='underline'></hr>
                        <form className='register' onSubmit={handleSubmit}>
                            <div className='input-block'>
                                <input type='text'
                                name='name' 
                                onChange={handleChange} 
                                value={values.name}
                                />
                                <label htmlFor='name'>Name</label>
                                <div className='error'>
                                {submitted && !values.name ?<p className='warning'>Name can't be empty</p> : null }
                                </div>
                            </div>
                            <div className='input-block'>
                                <input type='email' 
                                name='email'
                                onChange={handleChange} 
                                value={values.email}
                                />
                                <label htmlFor='email'>Email</label>
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
                                <label htmlFor='password'>Password</label>
                                <div className='error'>
                                {submitted && !values.password ?<p className='warning'>Password can't be empty</p> : null }
                                </div>
                            </div>
                            <button 
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