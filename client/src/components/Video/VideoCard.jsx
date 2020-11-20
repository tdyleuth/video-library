import React from 'react';
import './VideoCard.css';
import api from '../../api/api';

const VideoCard = ({ video, setVideo, isAuthed }) => {
    //Covert release date into Year-Month-Day format
    const dateObj = new Date(video.releaseDate);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    let newdate = year + '-' + month + '-' + day;

    const callDeleteVideoFunction = (e) => {
        e.preventDefault();
        const videoId = e.currentTarget.id;
        try {
            const deleteVideo = async () => {
                const response = await api.deleteVideoById(videoId);

                console.log('fgf', response);
            };

            deleteVideo();

            alert('Successfully Delete');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className='videoCard'>
            <img src={video.coverImage} className='center' alt='cover' />
            <h2 className='videoCard-title'>{video.title}</h2>
            <p className='videoCard-release-date'>Release Date: {newdate}</p>
            <p>{}</p>
            <p className='videoCard-synopsis'> {video.synopsis}</p>
            <p className='videoCard-stats'>
                Type: {video.type}
                {video.release_date} | Rating: {video.rating}
            </p>
            {isAuthed ? (
                <div className='videoCard-ctrls'>
                    <button
                        id={video._id}
                        onClick={callDeleteVideoFunction}
                        className='delete-button'
                    >
                        Delete
                    </button>
                    <button id={video._id} className='update-button'>
                        Update
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default VideoCard;
