import React, { useState } from 'react';
import api from '../../api/api';

import './SearchBar.css';

const SearchBar = ({ setVideos, videos }) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
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
            const SearchResults = videos.filter((data) => {
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

            setVideos(SearchResults);

            resetInputField();
        }
    };
    return (
        <div className='searchbar-container'>
            <form className='search'>
                <div className='search-wrapper'>
                    <input
                        className='search-box'
                        value={searchValue}
                        onChange={handleSearchInputChanges}
                        type='text'
                        placeholder='Search Video...'
                    />
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
