import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const { error } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() === '') {
      error('Please enter text to search for images');
    } else {
      onSubmit(searchText);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;