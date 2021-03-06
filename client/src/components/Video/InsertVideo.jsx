import React, { useState } from 'react';
import './InsertVideo.css';
import api from '../../api/api';

const InsertVideo = ({
    setShowModal,
    videos,
    setVideos,
    setShowVideoAddedMessageAlert,
}) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [type, setType] = useState('Movie');
    const [coverImage, setCoverImage] = useState('');

    const handleTitleInputChanges = (e) => {
        setTitle(e.target.value);
    };

    const handleRatingInputChanges = (e) => {
        setRating(e.target.value);
    };
    const handleReleaseDateInputChanges = (e) => {
        setReleaseDate(e.target.value);
    };
    const handleSynopsisInputChanges = (e) => {
        setSynopsis(e.target.value);
    };

    const handleTypeInputChanges = (type) => {
        setType(type);
    };

    const handleCoverImageInputChanges = (e) => {
        setCoverImage(e.target.value);
    };
    const callInsertVideoFunction = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            rating,
            releaseDate,
            synopsis,
            coverImage,
            type,
        };
        try {
            const response = await api.createVideo(payload);
            console.log('Response', response);

            const {
                id,
                title,
                synopsis,
                rating,
                coverImage,
                releaseDate,
                type,
            } = response.data;

            const newVideo = {
                _id: id,
                title,
                synopsis,
                rating,
                coverImage,
                releaseDate,
                type,
            };

            const newVideoList = [newVideo, ...videos];

            setVideos(newVideoList);

            setShowVideoAddedMessageAlert(true);

            setTimeout(() => {
                setShowVideoAddedMessageAlert(false);
            }, 2400);

            setShowModal(false);

            const resetInputField = () => {
                setTitle('');
                setRating('');
                setReleaseDate('');
                setSynopsis('');
                setType('');
                setCoverImage('');
            };

            resetInputField();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='insert-video-container'>
            <div className='insert-video-form'>
                <form onSubmit={callInsertVideoFunction}>
                    <div className='modal-header'>
                        <h2>Insert Video</h2>
                        <button
                            type='button'
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className='close-button'
                        >
                            X
                        </button>
                    </div>
                    <label className='title-label'>
                        <b>Title: </b>
                    </label>
                    <input
                        onChange={handleTitleInputChanges}
                        value={title}
                        type='text'
                        placeholder='Enter Video Title'
                        required
                    ></input>

                    <label className='releaseDate-label'>
                        <b>Release Date: </b>
                    </label>
                    <input
                        onChange={handleReleaseDateInputChanges}
                        value={releaseDate}
                        type='date'
                        placeholder='Enter Release Date'
                        required
                    ></input>

                    <label className='type-label'>
                        <b>Type: </b>
                    </label>
                    <select
                        className='video-type-list'
                        onChange={(e) => handleTypeInputChanges(e.target.value)}
                        value={type}
                    >
                        <option defaultValue='Movie'>Movie</option>
                        <option value='TV Show'>TV Show</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='Animation'>Animation</option>
                    </select>

                    <label className='rating-label'>
                        <b>Rating 1-10: </b>
                    </label>
                    <input
                        onChange={handleRatingInputChanges}
                        value={rating}
                        type='number'
                        min='1'
                        max='10'
                        placeholder='Enter Rating'
                        required
                    ></input>

                    <label className='coverImage-label'>
                        <b>Cover Image URL: </b>
                    </label>
                    <input
                        onChange={handleCoverImageInputChanges}
                        value={coverImage}
                        type='url'
                        placeholder='Enter Cover Image URL'
                        required
                    ></input>

                    <label className='synopsis-label'>
                        <b>Synopsis: </b>
                    </label>
                    <textarea
                        className='synopsis-input'
                        onChange={handleSynopsisInputChanges}
                        value={synopsis}
                        rows={5}
                        cols={5}
                        placeholder='Enter Synopsis'
                        required
                    ></textarea>

                    <div className='button-container'>
                        <button className='form-insert-video-submit-button'>
                            Submit
                        </button>

                        <button
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className='form-insert-video-cancel-button'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InsertVideo;
