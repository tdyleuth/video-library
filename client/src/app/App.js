import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import VideoList from '../components/Video/VideoList';

function App() {
    const [isAuthed, setIsAuthed] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('token');
        if (loggedInUser) {
            setIsAuthed(true);
        }
    }, []);

    return (
        <>
            <NavBar
                isAuthed={isAuthed}
                setIsAuthed={setIsAuthed}
                videos={videos}
                setVideos={setVideos}
            />
            <VideoList
                isAuthed={isAuthed}
                setIsAuthed={setIsAuthed}
                videos={videos}
                setVideos={setVideos}
            />
        </>
    );
}

export default App;
