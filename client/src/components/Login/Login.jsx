import React, { useState } from 'react';
import './Login.css';
import api from '../../api/api';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ isAuthed, setIsAuthed }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInputChanges = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChanges = (e) => {
        setPassword(e.target.value);
    };

    const callLoginFunction = async (e) => {
        e.preventDefault();
        const payload = { email, password };
        console.log('payload!!', payload);
        try {
            const response = await api.loginUser(payload);
            setIsAuthed(true);
            alert('Login Success');
            console.log('Response', response);
        } catch (err) {
            console.error('Login failed');
            alert('Login Failed! Try again');
        }
    };
    console.log('email', email);
    console.log('password', password);
    return (
        <div className='login-container'>
            <div className='login-form'>
                <form
                    onSubmit={callLoginFunction}
                    className='login-submit-form'
                >
                    <h2>Login</h2>
                    <label className='email-label'>
                        <b>Email: </b>
                    </label>
                    <input
                        value={email}
                        onChange={handleEmailInputChanges}
                        type='email'
                        placeholder='Enter Email'
                        required
                    ></input>

                    <label className='password-label'>
                        <b>Password: </b>
                    </label>
                    <input
                        onChange={handlePasswordInputChanges}
                        value={password}
                        type='password'
                        placeholder='Enter Password'
                        required
                    ></input>
                    <div>
                        <p className='signup-link'>
                            Not registered?&nbsp;
                            <Link to='/user/signup' className='nav-link'>
                                Signup
                            </Link>{' '}
                        </p>
                    </div>
                    <div className='button-container'>
                        <button className='form-login-button'>Login</button>
                    </div>
                </form>
            </div>
            {isAuthed ? <Redirect to='/videos/list' /> : null}
        </div>
    );
};

export default Login;
