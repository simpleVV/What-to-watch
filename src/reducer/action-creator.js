const filterMoviesByGenre = (genre, movieList) => {
  return (genre === `All genres`) ? movieList : movieList.filter((movie) => movie.genre === genre);
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre
  }),

  filterMovies: (genre, movieList) => ({
    type: `FILTER_MOVIES`,
    payload: filterMoviesByGenre(genre, movieList)
  }),

  showMoreMovies: (currentMovies, allMovies) => {
    const moreMovies = 20;

    return {
      type: `SHOW_MORE_MOVIES`,
      payload: (currentMovies + moreMovies <= allMovies) ? moreMovies : allMovies - currentMovies
    };
  }
};

export {ActionCreator, filterMoviesByGenre};
