import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import './VideoList.css';
import VideoCard from './VideoCard';
import SearchBar from '../SearchBar/SearchBar';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.getAllVideos();
            console.log('Response', response);

            setVideos(response.data.data);

            return response;
        }
        fetchData();
    }, []);

    return (
        <>
            <SearchBar videos={videos} setVideos={setVideos} />
            <div className='video-results'>
                {videos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                ))}
            </div>
        </>
    );
};

export default VideoList;
