import React, { useState } from 'react';
import './NavBar.css';
import api from '../../api/api';
import InsertVideo from '../Video/InsertVideo';

import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const NavBar = ({ setIsAuthed, isAuthed, setVideos, videos }) => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

    const callShowModalFunction = () => {
        setShowModal(true);
    };

    const callShowLoginModalFunction = () => {
        setShowLoginModal(true);
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
                    <button
                        onClick={callShowLoginModalFunction}
                        className='login-signup-button'
                    >
                        Login/Signup
                    </button>
                )}

                {isAuthed ? (
                    <button
                        className='insert-button'
                        onClick={callShowModalFunction}
                    >
                        Insert Video
                    </button>
                ) : null}
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
                        />
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default NavBar;
