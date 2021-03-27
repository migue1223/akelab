import React, { useEffect, useState } from 'react';
import { Movie } from './Movie';
import { getFilms } from '../helpers/fetch';
import { FilterDate } from './FilterDate';
import { FilterGender } from './FilterGender';
import { FilterSearch } from './FilterSearch';
import { sortData } from '../helpers/sortData';

export const Film = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [gender, setGender] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getFilms('films?Akelab=123456789');

      setMovies(data.results);
      setGenres(data.genres);
    })();
  }, []);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);

  useEffect(() => {
    setFilteredMovies(sortData(date, movies));
  }, [date, movies]);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.genre_ids.filter((ids) => gender.filter((g) => g === ids))
      )
    );
  }, [gender, movies]);

  return (
    <div>
      <div className='container-actions-movies'>
        <FilterSearch onChange={(e) => setSearch(e.target.value)} />
        <FilterGender
          genres={genres}
          onClick={(e) => setGender([+e.target.value, ...gender])}
        />
        <FilterDate onClick={(e) => setDate(e.target.innerText)} />
      </div>
      <div className='container-movies'>
        {filteredMovies.length ? (
          filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} genres={genres} />
          ))
        ) : (
          <h1>Not results</h1>
        )}
      </div>
    </div>
  );
};
