import React, { useState, useRef, useEffect } from 'react';
import api from '../../api/api';

import './SearchBar.css';

const SearchBar = ({
    setVideos,
    videos,
    setSelectedVideo,
    setShowNoSearchResults,
}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filterDisplay, setFilterDisplay] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);

    const videoList = videos.map((video) => video.title.toLowerCase());
    const videoListElem = videoList.map((title, i) => {
        return <li key={i}>{title}</li>;
    });

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);

        if (searchValue !== '') {
            let newVideoList = [];
            console.log('videoList', videoList);

            newVideoList = videoList.filter((title) =>
                title.includes(searchValue.toLowerCase())
            );

            let newVideoListEle = newVideoList.map((title, i) => {
                return <li key={i}>{title}</li>;
            });

            setFilterDisplay(newVideoListEle);
            setShowDropDown(true);
        } else {
            setFilterDisplay([]);
        }
    };

    const resetInputField = () => {
        setSearchValue('');
    };
    const callSearchFunction = (e) => {
        e.preventDefault();

        if (searchValue === '') {
            const fetchData = async () => {
                const response = await api.getAllVideos();
                console.log('Response', response);
                setVideos(response.data.data);
                setShowNoSearchResults(false);
                setSelectedVideo('');
            };
            fetchData();
        } else {
            // eslint-disable-next-line
            const searchResults = videos.filter((data) => {
                if (searchValue === null) {
                } else {
                    return data.title
                        .toLowerCase()
                        .split(' ')
                        .join('')
                        .includes(
                            searchValue.toLowerCase().split(' ').join('')
                        );
                }
            });

            setShowDropDown(false);
            if (searchResults.length < 1) {
                setShowNoSearchResults(true);
                setVideos([]);
            } else {
                setVideos(searchResults);
            }

            setSelectedVideo('');

            resetInputField();
        }
    };

    const searchDropdownTitle = (e) => {
        let clickedTitle = e.target.innerHTML;

        const searchTitle = videos.filter((data) => {
            return data.title
                .toLowerCase()
                .split(' ')
                .join('')
                .includes(clickedTitle.toLowerCase().split(' ').join(''));
        });

        setSelectedVideo('');
        setVideos(searchTitle);
        resetInputField();
        setShowDropDown(false);
    };

    const handleChange = () => {
        setShowDropDown(true);
    };

    const node = useRef();

    const handleClick = (e) => {
        console.log(e.target);
        if (node.current.contains(e.target)) {
            //inside click
            return;
        } //outside click
        setShowDropDown(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div className='searchbar-container'>
            <form className='searchbar-form' onSubmit={callSearchFunction}>
                <i className='fa fa-search'></i>
                <input
                    onClick={handleChange}
                    id='search-input-box'
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type='text'
                    placeholder='Search for Video...'
                />

                <div
                    ref={node}
                    onClick={searchDropdownTitle}
                    className={showDropDown ? 'active' : 'title-dropdown'}
                >
                    {searchValue.length < 1 ? videoListElem : filterDisplay}
                </div>
                {/* {showClearSearchButton !== true ? (
                        <button
                            id='search-button'
                            onClick={callSearchFunction}
                            type='submit'
                        >
                            SEARCH
                        </button>
                    ) : (
                        <button onClick={callSearchFunction} id='clearSearchButton'>CLEAR SEARCH</button>
                    )} */}
            </form>
        </div>
    );
};
export default SearchBar;
