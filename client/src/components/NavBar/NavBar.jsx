import React, { useState } from 'react';
import './NavBar.css';

import InsertVideo from '../Video/InsertVideo';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Logo from '../../Images/video-library-logo.png';

const NavBar = ({ setIsAuthed, isAuthed, setVideos, videos }) => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const logOff = (e) => {
        e.preventDefault();
        let logOffConfirm = window.confirm('Are you sure you want to log off?');

        if (logOffConfirm === true) {
            localStorage.removeItem('token');
            setShowModal(false);
            setIsAuthed(false);
        } else {
            return null;
        }
    };

    const callShowInsertVideoModalFunction = () => {
        let divOverlay = document.createElement('div');
        divOverlay.id = 'overlay';
        document.body.appendChild(divOverlay);
        setShowModal(true);
    };

    const callShowLoginModalFunction = () => {
        let divOverlay = document.createElement('div');
        divOverlay.id = 'overlay';
        document.body.appendChild(divOverlay);
        setShowLoginModal(true);
    };

    const callShowSignupModalFunction = () => {
        setShowSignupModal(true);
    };
    return (
        <nav className='nav-wrap'>
            <div className='nav-links'>
                <a href='#home' className='navbar-brand'>
                    <img
                        alt='video library'
                        src={Logo}
                        width='125
                        '
                    />
                </a>
                {isAuthed ? (
                    <div className='button-container'>
                        <button onClick={logOff} className='signout-button'>
                            Sign Out
                        </button>
                        <button
                            className='insert-button'
                            onClick={callShowInsertVideoModalFunction}
                        >
                            Insert Video
                        </button>
                    </div>
                ) : (
                    <div className='button-container'>
                        <button
                            type='button'
                            onClick={callShowLoginModalFunction}
                            className='signin-button'
                        >
                            Sign In
                        </button>
                        <button
                            onClick={callShowSignupModalFunction}
                            className='signup-button'
                        >
                            REGISTER
                        </button>
                    </div>
                )}
            </div>
            {showModal ? (
                <div className='modal-container'>
                    <InsertVideo
                        showModal={showModal}
                        setShowModal={setShowModal}
                        setVideos={setVideos}
                        videos={videos}
                    />
                </div>
            ) : null}

            {showLoginModal ? (
                <div className='modal-container'>
                    <Login
                        setIsAuthed={setIsAuthed}
                        isAuthed={isAuthed}
                        showLoginModal={showLoginModal}
                        setShowLoginModal={setShowLoginModal}
                        setShowSignupModal={setShowSignupModal}
                    />
                </div>
            ) : null}

            {showSignupModal ? (
                <div className='modal-container'>
                    <Signup
                        showSignupModal={showSignupModal}
                        setShowSignupModal={setShowSignupModal}
                        setShowLoginModal={setShowLoginModal}
                        setIsAuthed={setIsAuthed}
                    />
                </div>
            ) : null}
        </nav>
    );
};

export default NavBar;
