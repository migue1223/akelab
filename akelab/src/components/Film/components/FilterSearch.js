import React from 'react';

export const FilterSearch = ({ onSearchChange }) => {
  return (
    <input
      type='text'
      className='search-movies'
      placeholder='Search Movies'
      onChange={onSearchChange}
    />
  );
};
