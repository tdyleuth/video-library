import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from '../components/NavBar/NavBar';
import VideoList from '../components/Video/VideoList';
import NoSearchResults from '../components/MessageAlerts/NoSearchResults';

function App() {
    const [isAuthed, setIsAuthed] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [showUpdateVideoModal, setShowUpdateVideoModal] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState(false);
    const [showSignupMessageAlert, setShowSignupMessageAlert] = useState(false);
    const [showDeletedMessageAlert, setShowDeletedMessageAlert] = useState(
        false
    );
    const [
        showVideoUpdatedMessageAlert,
        setShowVideoUpdatedMessageAlert,
    ] = useState(false);
    const [
        showVideoAddedMessageAlert,
        setShowVideoAddedMessageAlert,
    ] = useState(false);
    const [showNoSearchResults, setShowNoSearchResults] = useState(false);

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
                showAlertMessage={showAlertMessage}
                setShowAlertMessage={setShowAlertMessage}
                setSelectedVideo={setSelectedVideo}
                showSignupMessageAlert={showSignupMessageAlert}
                setShowSignupMessageAlert={setShowSignupMessageAlert}
                setShowDeletedMessageAlert={setShowDeletedMessageAlert}
                showDeletedMessageAlert={showDeletedMessageAlert}
                setShowVideoAddedMessageAlert={setShowVideoAddedMessageAlert}
                showVideoAddedMessageAlert={showVideoAddedMessageAlert}
                showVideoUpdatedMessageAlert={showVideoUpdatedMessageAlert}
                setShowVideoUpdatedMessageAlert={
                    setShowVideoUpdatedMessageAlert
                }
                setShowUpdateVideoModal={setShowUpdateVideoModal}
                showUpdateVideoModal={showUpdateVideoModal}
                setShowNoSearchResults={setShowNoSearchResults}
            />
            {showNoSearchResults ? <NoSearchResults /> : null}
            <VideoList
                isAuthed={isAuthed}
                setIsAuthed={setIsAuthed}
                videos={videos}
                setVideos={setVideos}
                selectedVideo={selectedVideo}
                setSelectedVideo={setSelectedVideo}
                setShowDeletedMessageAlert={setShowDeletedMessageAlert}
                showDeletedMessageAlert={showDeletedMessageAlert}
                showVideoUpdatedMessageAlert={showVideoUpdatedMessageAlert}
                setShowVideoUpdatedMessageAlert={
                    setShowVideoUpdatedMessageAlert
                }
                setShowUpdateVideoModal={setShowUpdateVideoModal}
                showUpdateVideoModal={showUpdateVideoModal}
            />
        </>
    );
}

export default App;
