const filterMoviesByGenre = (genre, movieList) => {
  return (genre === `All genres`) ? movieList : movieList.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre
  }),

  filterMoviesByGenre: (genre, movieList) => ({
    type: `FILTER_MOVIES`,
    payload: filterMoviesByGenre(genre, movieList)
  }),
};

export {ActionCreator, filterMoviesByGenre};
