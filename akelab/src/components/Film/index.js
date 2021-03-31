import React, { useEffect, useState } from 'react';
import { Movie } from './components/Movie';
import { getFilms } from '../../helpers/fetch';
import { FilterDate } from './components/FilterDate';
import { FilterGender } from './components/FilterGender';
import { FilterSearch } from './components/FilterSearch';
import { sortData } from '../../helpers/sortData';
import { filterGender } from '../../helpers/filterGender';

export const Film = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [gender, setGender] = useState({});
  const [genderItems, setGenderItems] = useState([]);
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
    const { id, checked } = gender;
    if (checked) {
      genderItems.push(+id);
      setGenderItems(genderItems);
    } else {
      const index = genderItems.indexOf(+id);
      genderItems.splice(index, 1);
      setGenderItems(genderItems);
    }

    const filterMovies = filterGender(movies, genderItems);

    filterMovies.length > 0
      ? setFilteredMovies(filterMovies)
      : setFilteredMovies(movies);
  }, [genderItems, gender, movies]);

  return (
    <div>
      <div className='container-actions-movies'>
        <FilterSearch onSearchChange={(e) => setSearch(e.target.value)} />
        <FilterGender
          genres={genres}
          onFilterGenreClick={(e) =>
            setGender({ id: e.target.id, checked: e.target.checked })
          }
        />
        <FilterDate onFilterDateClick={(e) => setDate(e.target.innerText)} />
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
