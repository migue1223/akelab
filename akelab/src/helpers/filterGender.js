export const filterGender = (movies, genderItems) => {
  const filterMovies = [];

  movies.filter((movie) =>
    movie.genre_ids.filter((ids) =>
      genderItems.filter((g) => {
        if (g === ids) {
          filterMovies.filter((filter) => {
            if (filter.id === movie.id) {
              const index = filterMovies.indexOf(movie.id);
              return filterMovies.splice(index, 1);
            } else {
              return filterMovies;
            }
          });
          filterMovies.push(movie);
        } else {
          return filterMovies;
        }
      })
    )
  );

  return filterMovies;
};
