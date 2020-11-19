import React, { useState } from 'react';
import './Signup.css';
import api from '../../api/api';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChanges = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChanges = (e) => {
        setPassword(e.target.value);
    };

    const callSignupFunction = async (e) => {
        e.preventDefault();
        const payload = { email, password };
        console.log('payload!!', payload);
        try {
            const response = await api.signup(payload);
            alert('Signup Success!');
            console.log('Response', response);
        } catch (err) {
            console.error('Signup failed');
        }
    };
    console.log('email', email);
    console.log('password', password);
    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <form
                    onSubmit={callSignupFunction}
                    className='signup-submit-form'
                >
                    <h2>Register</h2>
                    <label className='email-label'>
                        <b>Enter Email: </b>
                    </label>
                    <input
                        onChange={handleEmailInputChanges}
                        type='email'
                        placeholder='Enter Email'
                        required
                    ></input>

                    <label className='password-label'>
                        <b>Create Password: </b>
                    </label>
                    <input
                        onChange={handlePasswordInputChanges}
                        type='password'
                        placeholder='Enter Password'
                        required
                    ></input>

                    <p className='login-link'>
                        Already registered?&nbsp;
                        <Link to='/user/login' className='nav-link'>
                            Login
                        </Link>{' '}
                    </p>
                    <div className='button-container'>
                        <button className='form-signup-button'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
