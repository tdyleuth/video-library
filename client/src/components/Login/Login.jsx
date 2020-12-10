import React, { useState } from 'react';
import './Login.css';
import api from '../../api/api';

const Login = ({
    setIsAuthed,
    isAuthed,
    setShowLoginModal,
    setShowSignupModal,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToggle, setPasswordToggle] = useState(false);

    const handleEmailInputChanges = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChanges = (e) => {
        setPassword(e.target.value);
    };

    const callSignupModalFunction = (e) => {
        e.preventDefault();
        setShowLoginModal(false);
        setShowSignupModal(true);
    };

    const callLoginFunction = async (e) => {
        e.preventDefault();
        const payload = { email, password };
        try {
            const response = await api.loginUser(payload);
            if (response.data.success === true) {
                const { token } = response.data;
                localStorage.setItem('token', token);

                setShowLoginModal(false);
                setIsAuthed(true);
                setPasswordToggle(false);

                alert(`${email} is logged in!'`);
            }
        } catch (err) {
            alert('Login Failed! Try again');
        }
    };

    const handlePasswordToggle = () => {
        if (passwordToggle === false) {
            setPasswordToggle(true);
        } else {
            setPasswordToggle(false);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form
                    onSubmit={callLoginFunction}
                    className='login-submit-form'
                >
                    <div className='modal-header'>
                        <h2>Sign In</h2>
                        <button
                            type='button'
                            onClick={() => {
                                setShowLoginModal(false);
                                setPasswordToggle(false);
                            }}
                            className='close-button'
                        >
                            X
                        </button>
                    </div>
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
                    <div className='pass-wrapper'>
                        <input
                            onChange={handlePasswordInputChanges}
                            value={password}
                            minLength='6'
                            type={passwordToggle ? 'text' : 'password'}
                            placeholder='Enter Password'
                            required
                        />
                        <i
                            className={
                                passwordToggle ? 'fa fa-eye-slash' : 'fa fa-eye'
                            }
                            onClick={handlePasswordToggle}
                        ></i>
                    </div>
                    <div className='button-container'>
                        <button className='form-login-button'>Submit</button>
                    </div>
                    <div>
                        <p className='signup-link'>
                            Not registered?&nbsp;
                            <a
                                href='user/sigup'
                                onClick={callSignupModalFunction}
                            >
                                Create Account
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
