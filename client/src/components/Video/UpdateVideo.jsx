import React, { useState } from 'react';
import './UpdateVideo.css';
import api from '../../api/api';

const UpdateVideo = ({
    setShowVideoUpdatedMessageAlert,
    setShowUpdateVideoModal,
    selectedVideo,
    setSelectedVideo,
    setVideos,
}) => {
    async function fetchData() {
        const response = await api.getAllVideos();

        setVideos(response.data.data);

        return response;
    }

    const [video, setVideo] = useState(selectedVideo);
    let date = new Date(video.releaseDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    const selectedVideoDate = year + '-' + month + '-' + dt;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideo({ ...video, [name]: value });
    };

    const callUpdateVideoFunction = async (e) => {
        e.preventDefault();

        const payload = {
            title: video.title,
            rating: video.rating,
            releaseDate: video.releaseDate,
            synopsis: video.synopsis,
            coverImage: video.coverImage,
            type: video.type,
        };
        const id = video.id;

        try {
            await api.updateVideoById(id, payload);

            setShowVideoUpdatedMessageAlert(true);

            setTimeout(() => {
                setShowVideoUpdatedMessageAlert(false);
            }, 2400);
            setShowUpdateVideoModal(false);
            setSelectedVideo(video);
            fetchData();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='update-video-container'>
            <div className='update-video-form'>
                <form onSubmit={callUpdateVideoFunction}>
                    <div className='modal-header'>
                        <h2>Edit Video</h2>
                        <button
                            type='button'
                            onClick={() => {
                                setShowUpdateVideoModal(false);
                                setSelectedVideo({});
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
                        onChange={handleChange}
                        value={video.title}
                        type='text'
                        name='title'
                        required
                    ></input>

                    <label className='releaseDate-label'>
                        <b>Release Date: </b>
                    </label>
                    <input
                        onChange={handleChange}
                        value={selectedVideoDate}
                        name='date'
                        type='date'
                        placeholder='YYYY/MM/DD'
                        required
                    ></input>

                    <label className='type-label'>
                        <b>Type: </b>
                    </label>
                    <select
                        className='video-type-list'
                        onChange={handleChange}
                        name='type'
                        value={video.type}
                    >
                        <option disabled hidden value=''></option>
                        <option value='Movie'>Movie</option>
                        <option value='TV Show'>TV Show</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='Animation'>Animation</option>
                    </select>

                    <label className='rating-label'>
                        <b>Rating 1-10: </b>
                    </label>
                    <input
                        onChange={handleChange}
                        value={video.rating}
                        name='rating'
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
                        onChange={handleChange}
                        value={video.coverImage}
                        type='url'
                        placeholder='Enter Cover Image URL'
                        required
                    ></input>

                    <label className='synopsis-label'>
                        <b>Synopsis: </b>
                    </label>
                    <textarea
                        className='synopsis-input'
                        onChange={handleChange}
                        value={video.synopsis}
                        name='synopsis'
                        rows={5}
                        cols={5}
                        placeholder='Enter Synopsis'
                        required
                    ></textarea>

                    <div className='button-container'>
                        <button className='form-update-video-update-button'>
                            Update
                        </button>

                        <button
                            onClick={() => {
                                setShowUpdateVideoModal(false);
                                setSelectedVideo({});
                            }}
                            className='form-update-video-cancel-button'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateVideo;
