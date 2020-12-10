import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ selectedVideo, closeVideoPopup }) => {
    //Covert release date into Year-Month-Day format
    const dateObj = new Date(selectedVideo.releaseDate);

    const year = dateObj.getUTCFullYear();

    let newdate = year;
    return (
        <section className='popup'>
            <div className='content'>
                <h2>
                    {selectedVideo.title} <span>({newdate})</span>
                    <p className='rating'>
                        <i className='fa fa-star'></i> {selectedVideo.rating}
                    </p>
                </h2>

                <div className='synopsis'>
                    <img
                        alt={selectedVideo.title + 'cover'}
                        src={selectedVideo.coverImage}
                    />
                    <p>{selectedVideo.synopsis}</p>
                </div>
                <button className='close' onClick={closeVideoPopup}>
                    Close
                </button>
            </div>
        </section>
    );
};
export default VideoPopup;
