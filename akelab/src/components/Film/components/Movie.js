import React from 'react';

export const Movie = ({ movie, genres }) => {
  const pathImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <figure className='figure-movie'>
      <strong className='figure-title'>
        {movie.title.substr(0, 45)} ({movie.release_date.split('-')[0]})
      </strong>
      <div className='container-image-data'>
        <img src={pathImage} alt={movie.title} />
        <div className='container-data'>
          <p className='p-overview'>{movie.overview.substr(0, 350)} ...</p>
          <p>
            <strong>Título:</strong> {movie.title.substr(0, 25)}
          </p>
          <p>
            <strong>Calificación:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Género:</strong>
            {genres.map((genre) =>
              movie.genre_ids.map((ids) =>
                ids === genre.id ? `${genre.name}, ` : ''
              )
            )}
          </p>
          <p>
            <strong>Fecha de realización:</strong> {movie.release_date}
          </p>
        </div>
      </div>
    </figure>
  );
};
