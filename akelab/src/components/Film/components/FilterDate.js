import React, { useEffect, useState, useRef } from 'react';
import arrowIcon from '../../../images/Arrow Icon.png';

export const FilterDate = ({ onFilterDateClick }) => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleClickInputOutside = (e) => {
    onFilterDateClick(e);
    setOpen(false);
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
        className='button-date'
        onClick={() => setOpen(!open)}
      >
        <span>
          Ordenar <img src={arrowIcon} alt='Ordenar' />
        </span>
      </button>
      {open && (
        <div className='dropdown-wrapper'>
          <ul className='dropdown-menu'>
            <li>
              <strong>Fecha</strong>
            </li>
            <li onClick={handleClickInputOutside} className='dropdown-menu__item'>
              Nuevas - Antiguas
            </li>
            <li onClick={handleClickInputOutside} className='dropdown-menu__item'>
              Antiguas - Nuevas
            </li>
            <li>
              <strong>Calificación</strong>
            </li>
            <li onClick={handleClickInputOutside} className='dropdown-menu__item'>
              0 - 10 puntos
            </li>
            <li onClick={handleClickInputOutside} className='dropdown-menu__item'>
              10 - 0 puntos
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
