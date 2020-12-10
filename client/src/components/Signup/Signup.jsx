import React, { useState } from 'react';
import './Signup.css';
import api from '../../api/api';

const Signup = ({ setShowSignupModal, setShowLoginModal, setIsAuthed }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToggle, setPasswordToggle] = useState(false);

    const handleEmailInputChanges = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChanges = (e) => {
        setPassword(e.target.value);
    };

    const callSignupFunction = async (e) => {
        e.preventDefault();
        const payload = { email, password };

        try {
            const response = await api.signup(payload);
            if (response.data.success === true) {
                const { token } = response.data;
                localStorage.setItem('token', token);

                setShowSignupModal(false);
                setIsAuthed(true);

                alert(`Signup Success!'`);
            }
        } catch (err) {
            console.error('Signup failed');
        }
    };

    const callLoginModalFunction = (e) => {
        e.preventDefault();
        setShowSignupModal(false);
        setShowLoginModal(true);
    };

    const handlePasswordToggle = () => {
        if (passwordToggle === false) {
            setPasswordToggle(true);
        } else {
            setPasswordToggle(false);
        }
    };

    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <form
                    onSubmit={callSignupFunction}
                    className='signup-submit-form'
                >
                    <div className='modal-header'>
                        <h2>Register</h2>
                        <button
                            type='button'
                            onClick={() => {
                                setShowSignupModal(false);
                            }}
                            className='close-button'
                        >
                            X
                        </button>
                    </div>
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
                    <div className='pass-wrapper'>
                        <input
                            onChange={handlePasswordInputChanges}
                            type={passwordToggle ? 'text' : 'password'}
                            placeholder='Enter Password'
                            required
                        ></input>
                        <i
                            className={
                                passwordToggle ? 'fa fa-eye-slash' : 'fa fa-eye'
                            }
                            onClick={handlePasswordToggle}
                        ></i>
                    </div>
                    <div className='button-container'>
                        <button className='form-signup-button'>
                            Create Account
                        </button>
                    </div>
                    <p className='signin-link'>
                        Already registered?&nbsp;
                        <a href='/user/login' onClick={callLoginModalFunction}>
                            Login
                        </a>{' '}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
