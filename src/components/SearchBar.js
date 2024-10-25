import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {

  const handleSearch = (e) => {
    onSearch(e);
  };

  return (
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a movie..."
      />
  );
};

export default SearchBar;
