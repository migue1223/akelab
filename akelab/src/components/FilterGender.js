import React, { useEffect, useState, useRef } from 'react';
import filterIcon from '../images/Filter Icon.png';

export const FilterGender = ({ onClick, genres }) => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className='container-date' ref={container}>
      <button
        type='button'
        className='button-gender'
        onClick={() => setOpen(!open)}
      >
        <img src={filterIcon} alt='Filter icon' />
      </button>
      {open && (
        <div className='dropdown-wrapper'>
          <ul className='dropdown-menu'>
            {genres.length &&
              genres.map((genre) => (
                <li className='dropdown-menu__item' key={genre.id}>
                  <input
                    onClick={onClick}
                    id={genre.id}
                    name={genre.name}
                    type='checkbox'
                    value={genre.id}
                  />
                  <label htmlFor={genre.id}> {genre.name}</label>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
