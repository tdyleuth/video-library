import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import './VideoList.css';
import VideoCard from './VideoCard';
import VideoPopup from '../Video/VideoPopup';
import UpdateVideo from '../Video/UpdateVideo';

const VideoList = ({
    isAuthed,
    setVideos,
    videos,
    selectedVideo,
    setSelectedVideo,
    setShowDeletedMessageAlert,
    ShowDeletedMessageAlert,
    setShowVideoUpdatedMessageAlert,
    setShowUpdateVideoModal,
    showUpdateVideoModal,
}) => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const response = await api.getAllVideos();

            setVideos(response.data.data);

            return response;
        }
        fetchData();
    }, [setVideos]);

    const openVideoPopup = (
        id,
        title,
        rating,
        releaseDate,
        synopsis,
        coverImage,
        type
    ) => {
        setSelectedVideo({
            id: id,
            title: title,
            rating: rating,
            releaseDate: releaseDate,
            synopsis: synopsis,
            coverImage: coverImage,
            type: type,
        });
    };

    const closeVideoPopup = () => {
        setSelectedVideo({});
    };

    return (
        <>
            <div className='video-results'>
                {videos.map((video) => (
                    <VideoCard
                        openVideoPopup={openVideoPopup}
                        isAuthed={isAuthed}
                        key={video._id}
                        video={video}
                        videos={videos}
                        setVideos={setVideos}
                        isFadingOut={isFadingOut}
                    />
                ))}
            </div>

            {typeof selectedVideo.title != 'undefined' ? (
                <VideoPopup
                    selectedVideo={selectedVideo}
                    closeVideoPopup={closeVideoPopup}
                    isAuthed={isAuthed}
                    setVideos={setVideos}
                    videos={videos}
                    setSelectedVideo={setSelectedVideo}
                    setShowDeletedMessageAlert={setShowDeletedMessageAlert}
                    ShowDeletedMessageAlert={ShowDeletedMessageAlert}
                    setIsFadingOut={setIsFadingOut}
                    isFadingOut={isFadingOut}
                    setShowUpdateVideoModal={setShowUpdateVideoModal}
                    showUpdateVideoModal={showUpdateVideoModal}
                />
            ) : null}
            {showUpdateVideoModal ? (
                <div className='modal-container'>
                    <UpdateVideo
                        setVideos={setVideos}
                        videos={videos}
                        selectedVideo={selectedVideo}
                        setSelectedVideo={setSelectedVideo}
                        setShowUpdateVideoModal={setShowUpdateVideoModal}
                        setShowVideoUpdatedMessageAlert={
                            setShowVideoUpdatedMessageAlert
                        }
                    />
                </div>
            ) : null}
        </>
    );
};

export default VideoList;
