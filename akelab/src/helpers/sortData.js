export const sortData = (date, movies) => {
  if (date === 'Nuevas - Antiguas') {
    return movies.sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1;
      }
      return 0;
    });
  }
  if (date === 'Antiguas - Nuevas') {
    return movies.sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      }
      return 0;
    });
  }
  if (date === '0 - 10 puntos') {
    return movies.sort((a, b) => {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      return 0;
    });
  }
  if (date === '10 - 0 puntos') {
    return movies.sort((a, b) => {
      if (a.vote_average < b.vote_average) {
        return -1;
      }
      return 0;
    });
  }
};
