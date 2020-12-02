import React, { useState } from 'react';
import './NavBar.css';
import api from '../../api/api';
import InsertVideo from '../Video/InsertVideo';

import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

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

    const fetchVideoList = () => {
        async function fetchData() {
            const response = await api.getAllVideos();

            setVideos(response.data.data);

            return response;
        }
        fetchData();
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
                <Link
                    onClick={fetchVideoList}
                    to='/videos/list'
                    className='nav-link'
                >
                    Video Library
                </Link>
                {isAuthed ? (
                    <button onClick={logOff} className='log-out-button'>
                        Log Out
                    </button>
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

                {isAuthed ? (
                    <button
                        className='insert-button'
                        onClick={callShowInsertVideoModalFunction}
                    >
                        Insert Video
                    </button>
                ) : null}
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
