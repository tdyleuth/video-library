import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, openVideoPopup, isFadingOut }) => {
    //Covert release date into Year-Month-Day format
    const dateObj = new Date(video.releaseDate);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    let newdate = year + '-' + month + '-' + day;

    return (
        <div
            className={isFadingOut ? 'videoCard-fadeout' : 'videoCard'}
            onClick={() =>
                openVideoPopup(
                    video._id,
                    video.title,
                    video.rating,
                    video.releaseDate,
                    video.synopsis,
                    video.coverImage,
                    video.type
                )
            }
        >
            <img src={video.coverImage} className='center' alt='cover' />
            <h2 className='videoCard-title'>{video.title}</h2>
            <p className='videoCard-release-date'>Release Date: {newdate}</p>
            <p>{}</p>
            <p className='videoCard-synopsis'> {video.synopsis}</p>
            <p className='videoCard-stats'>
                Type: {video.type}
                {video.release_date} | <i className='fa fa-star'></i>{' '}
                {video.rating}
            </p>
        </div>
    );
};

export default VideoCard;
