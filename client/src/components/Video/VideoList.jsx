import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import './VideoList.css';
import VideoCard from './VideoCard';
import SearchBar from '../SearchBar/SearchBar';
import VideoPopup from '../Video/VideoPopup';

const VideoList = ({ isAuthed, setVideos, videos }) => {
    const [selectedVideo, setSelectedVideo] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await api.getAllVideos();
            console.log('Response', response);

            setVideos(response.data.data);

            return response;
        }
        fetchData();
    }, []);

    const openVideoPopup = (
        id,
        title,
        rating,
        releaseDate,
        synopsis,
        coverImage
    ) => {
        setSelectedVideo({
            id: id,
            title: title,
            rating: rating,
            releaseDate: releaseDate,
            synopsis: synopsis,
            coverImage: coverImage,
        });
    };

    const closeVideoPopup = () => {
        setSelectedVideo({});
        console.log('dgsadd', selectedVideo);
    };

    return (
        <>
            <SearchBar videos={videos} setVideos={setVideos} />
            <div className='video-results'>
                {videos.map((video) => (
                    <VideoCard
                        openVideoPopup={openVideoPopup}
                        isAuthed={isAuthed}
                        key={video._id}
                        video={video}
                        videos={videos}
                        setVideos={setVideos}
                    />
                ))}
            </div>

            {typeof selectedVideo.title != 'undefined' ? (
                <VideoPopup
                    selectedVideo={selectedVideo}
                    closeVideoPopup={closeVideoPopup}
                />
            ) : null}
        </>
    );
};

export default VideoList;
