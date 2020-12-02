import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router>
            <NavBar
                isAuthed={isAuthed}
                setIsAuthed={setIsAuthed}
                videos={videos}
                setVideos={setVideos}
            />

            <Switch>
                <Route
                    path='/videos/list'
                    render={(props) => (
                        <VideoList
                            {...props}
                            isAuthed={isAuthed}
                            setIsAuthed={setIsAuthed}
                            videos={videos}
                            setVideos={setVideos}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
