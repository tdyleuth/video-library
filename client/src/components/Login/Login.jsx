import React, { useState } from 'react';
import './Login.css';
import api from '../../api/api';

const Login = ({
    setIsAuthed,
    setShowLoginModal,
    setShowSignupModal,
    setShowAlertMessage,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [validationMessage, setValidationMessage] = useState(false);

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
                setShowAlertMessage(true);

                setTimeout(() => {
                    setShowAlertMessage(false);
                }, 2400);
            }
        } catch (err) {
            console.log(err);
            setValidationMessage(true);

            setTimeout(() => {
                setValidationMessage(false);
            }, 4000);
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
                            id='close-button'
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
                    <div
                        className={
                            validationMessage
                                ? 'pass-wrapper shake'
                                : 'pass-wrapper'
                        }
                    >
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
                    {validationMessage ? (
                        <p id='show-validation-message'>
                            The email or password you entered is incorrect.
                            Please try again!
                        </p>
                    ) : (
                        <p id='hide-validation-message'>
                            The email or password you entered is incorrect.
                            Please try again!
                        </p>
                    )}
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
