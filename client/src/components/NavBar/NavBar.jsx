import React, { useState } from 'react';
import './NavBar.css';

import InsertVideo from '../Video/InsertVideo';
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Logo from '../../Images/video-library-logo.png';

const NavBar = ({
    setIsAuthed,
    isAuthed,
    setVideos,
    videos,
    setShowAlertMessage,
    showAlertMessage,
    setSelectedVideo,
    setShowSignupMessageAlert,
    showSignupMessageAlert,
    showDeletedMessageAlert,
    setShowVideoAddedMessageAlert,
    showVideoAddedMessageAlert,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const logOff = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setShowModal(false);
        setShowSidebar(false);
        setShowAlertMessage(true);
        setIsAuthed(false);

        setTimeout(() => {
            setShowAlertMessage(false);
        }, 2400);
    };

    const callShowInsertVideoModalFunction = () => {
        let divOverlay = document.createElement('div');
        divOverlay.id = 'overlay';
        document.body.appendChild(divOverlay);
        setSelectedVideo({});
        setShowSidebar(false);
        setShowModal(true);
    };

    const callShowLoginModalFunction = () => {
        let divOverlay = document.createElement('div');
        divOverlay.id = 'overlay';
        document.body.appendChild(divOverlay);
        setSelectedVideo({});
        setShowSidebar(false);
        setShowLoginModal(true);
    };

    const callShowSignupModalFunction = () => {
        setSelectedVideo({});
        setShowSidebar(false);
        setShowSignupModal(true);
    };

    const navSlide = () => {
        if (showSidebar === false) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    };

    const closeAlert = () => {
        setShowAlertMessage(false);
    };

    return (
        <div className='nav-container'>
            {' '}
            {showAlertMessage === true && isAuthed === true ? (
                <div className='show-alert signin-success'>
                    <span onClick={closeAlert} className='closebtn'>
                        &times;
                    </span>
                    Success! You are now logged in.
                </div>
            ) : null}
            {showAlertMessage === true && isAuthed === false ? (
                <div className='show-alert signout-success'>
                    <span onClick={closeAlert} className='closebtn'>
                        &times;
                    </span>
                    You are now logged out.
                </div>
            ) : null}
            {showSignupMessageAlert === true && isAuthed === true ? (
                <div className='show-alert signup-success'>
                    <span onClick={closeAlert} className='closebtn'>
                        &times;
                    </span>
                    Success! Account has been created.
                </div>
            ) : null}
            {showDeletedMessageAlert === true && isAuthed === true ? (
                <div className='show-alert delete-success'>
                    <span onClick={closeAlert} className='closebtn'>
                        &times;
                    </span>
                    Video has been deleted!
                </div>
            ) : null}
            {showVideoAddedMessageAlert === true && isAuthed === true ? (
                <div className='show-alert video-added-success'>
                    <span onClick={closeAlert} className='closebtn'>
                        &times;
                    </span>
                    Video has been added!
                </div>
            ) : null}
            <nav className='nav-wrap'>
                <div id='navbar-brand'>
                    <a href='/videos/list'>
                        <img
                            alt='video library'
                            src={Logo}
                            width='125
                        '
                        />
                    </a>
                </div>
                <SearchBar videos={videos} setVideos={setVideos} />

                <div className='mobile-container'>
                    <div
                        onClick={navSlide}
                        className={showSidebar ? 'burger toggle' : 'burger'}
                    >
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
                <div
                    className={
                        showSidebar ? 'nav-links nav-active' : 'nav-links'
                    }
                >
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
                            setShowVideoAddedMessageAlert={
                                setShowVideoAddedMessageAlert
                            }
                            showVideoAddedMessageAlert={
                                showVideoAddedMessageAlert
                            }
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
                            showAlertMessage={showAlertMessage}
                            setShowAlertMessage={setShowAlertMessage}
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
                            setShowSignupMessageAlert={
                                setShowSignupMessageAlert
                            }
                            showSignupMessageAlert={showSignupMessageAlert}
                        />
                    </div>
                ) : null}
            </nav>
        </div>
    );
};

export default NavBar;
