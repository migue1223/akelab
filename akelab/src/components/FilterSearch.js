import React from 'react';

export const FilterSearch = ({ onChange }) => {
  return (
    <input
      type='text'
      className='search-movies'
      placeholder='Search Movies'
      onChange={onChange}
    />
  );
};
