import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
    //Covert release date into Year-Month-Day format
    const dateObj = new Date(video.releaseDate);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    let newdate = year + '-' + month + '-' + day;
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
            <div className='videoCard-ctrls'>
                <button className='delete-button'>Delete</button>
                <button className='update-button'>Update</button>
            </div>
        </div>
    );
};

export default VideoCard;
