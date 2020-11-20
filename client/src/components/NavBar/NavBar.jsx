import React from 'react';
import './NavBar.css';
import api from '../../api/api';

import { Link } from 'react-router-dom';

const NavBar = ({ setIsAuthed, isAuthed, setVideos }) => {
    const logOff = (e) => {
        e.preventDefault();
        let logOffConfirm = window.confirm('Are you sure you want to log off?');

        if (logOffConfirm === true) {
            localStorage.setItem('token', null);
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
                    <Link
                        onClick={logOff}
                        to='/user/login'
                        className='nav-link'
                    >
                        Log Out
                    </Link>
                ) : (
                    <Link to='/user/login' className='nav-link'>
                        Login/Signup
                    </Link>
                )}

                {isAuthed ? (
                    <Link to='/video/create' className='nav-link'>
                        Insert Video
                    </Link>
                ) : null}
            </div>
        </nav>
    );
};

export default NavBar;
