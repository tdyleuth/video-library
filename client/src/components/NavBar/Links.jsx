import React from 'react';
import { Link } from 'react-router-dom';

const Links = (setIsAuthed, isAuthed) => {
    return (
        <>
            <Link to='/videos/list' className='nav-link'>
                Video Library
            </Link>

            <Link to='/user/login' className='nav-link'>
                Login/Signup
            </Link>

            {isAuthed ? (
                <Link to='/video/create' className='nav-link'>
                    Insert Video
                </Link>
            ) : null}
        </>
    );
};

export default Links;
