import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

const NavBar = ({ setIsAuthed, isAuthed }) => {
    console.log('dfdf', isAuthed);
    return (
        <nav className='nav-wrap'>
            <div className='nav-links'>
                <Link to='/videos/list' className='nav-link'>
                    Video Library
                </Link>
                {isAuthed ? (
                    <Link to='/user/login' className='nav-link'>
                        Logged In
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
