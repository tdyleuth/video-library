import React, { useState, useRef, useEffect } from 'react';
import api from '../../api/api';

import './SearchBar.css';

const SearchBar = ({ setVideos, videos }) => {
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

            setVideos(searchResults);

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
            <form className='search'>
                <div className='search-wrapper'>
                    <input
                        onClick={handleChange}
                        id='search-box'
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
                    <button
                        id='search-button'
                        onClick={callSearchFunction}
                        type='submit'
                    >
                        <i className='fa fa-search'></i>
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
