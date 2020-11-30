import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import VideoList from '../components/Video/VideoList';
// import Signup from '../components/Signup/Signup';
// import Login from '../components/Login/Login';
// import InsertVideo from '../components/Video/InsertVideo';
// import UpdateVideo from '../components/Video/UpdateVideo';

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
                {/* <Route path='/user/signup' exact component={Signup} />
                <Route
                    path='/user/login'
                    render={(props) => (
                        <Login
                            {...props}
                            isAuthed={isAuthed}
                            setIsAuthed={setIsAuthed}
                        />
                    )}
                /> */}

                {/* <Route path='/video/create' exact component={InsertVideo} />
                <Route path='/video/update/:id' exact component={UpdateVideo} /> */}
            </Switch>
        </Router>
    );
}

export default App;
