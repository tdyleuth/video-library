import React, { useState } from 'react';

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

        const SearchResults = videos.filter((data) => {
            if (searchValue === null) {
                return data;
            } else {
                return data.title
                    .toLowerCase()
                    .split(' ')
                    .join('')
                    .includes(searchValue.toLowerCase().split(' ').join(''));
            }
        });

        setVideos(SearchResults);

        resetInputField();
    };
    return (
        <div>
            <form className='search'>
                <input
                    className='search-box'
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type='text'
                />
                <input
                    onClick={callSearchFunction}
                    type='submit'
                    value='SEARCH'
                />
            </form>
        </div>
    );
};
export default SearchBar;
