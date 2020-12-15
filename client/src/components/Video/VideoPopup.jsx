import React from 'react';
import './VideoPopup.css';
import api from '../../api/api';

const VideoPopup = ({
    selectedVideo,
    setSelectedVideo,
    closeVideoPopup,
    isAuthed,
    setShowDeletedMessageAlert,
    videos,
    setVideos,
    setIsFadingOut,
    IsFadingOut,
}) => {
    //Convert release date into Year-Month-Day format
    const dateObj = new Date(selectedVideo.releaseDate);

    const year = dateObj.getUTCFullYear();

    let newdate = year;

    const callDeleteVideoFunction = (e) => {
        e.preventDefault();
        const videoId = e.currentTarget.id;
        try {
            const deleteVideo = async () => {
                const response = await api.deleteVideoById(videoId);

                console.log('Delete Video Response', response);

                const updatedVideoList = videos.filter(
                    (vid) => vid._id !== videoId
                );

                setSelectedVideo({});
                // setIsFadingOut(true);
                setShowDeletedMessageAlert(true);
                setTimeout(() => {
                    setShowDeletedMessageAlert(false);
                }, 2400);

                setTimeout(() => {
                    setVideos(updatedVideoList);
                }, 2000);
            };

            deleteVideo();
        } catch (err) {
            console.error(err);
        }
    };

    console.log('fasfas', IsFadingOut);
    return (
        <section className='popup'>
            <div className='header'>
                <button onClick={closeVideoPopup} className='close-button'>
                    X
                </button>
            </div>
            <div className='title'>
                <h2>
                    {selectedVideo.title} <span>({newdate})</span>
                    <p className='rating'>
                        Rating: <i className='fa fa-star'></i>{' '}
                        {selectedVideo.rating}
                    </p>
                </h2>
            </div>
            <div className='content'>
                <div className='synopsis'>
                    <img
                        alt={selectedVideo.title + 'cover'}
                        src={selectedVideo.coverImage}
                    />
                    <p>{selectedVideo.synopsis}</p>
                </div>
                {isAuthed ? (
                    <div className='popup-button-container'>
                        <button className='update-button' id={selectedVideo.id}>
                            Update Video
                        </button>
                        <button
                            id={selectedVideo.id}
                            onClick={callDeleteVideoFunction}
                            className='delete-button'
                        >
                            Delete Video
                        </button>
                    </div>
                ) : null}
            </div>
        </section>
    );
};
export default VideoPopup;
