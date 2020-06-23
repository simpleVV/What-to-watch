import films from '../mocks/films.js';

const movieGenres = new Set();
for (const film of films) {
  movieGenres.add(film.genre);
}

const genres = [`All genres`, ...movieGenres];

const initialState = {
  currentGenre: `All genres`,
  allGenres: genres,
  fullMovieList: films,
  filteredMovies: films,
  moviesPerPage: 8
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
    case `FILTER_MOVIES`:
      return Object.assign({}, state, {
        filteredMovies: action.payload
      });
    case `SHOW_MORE_MOVIES`:
      return Object.assign({}, state, {
        moviesPerPage: state.moviesPerPage + action.payload
      });
  }
  return state;
};

export default reducer;
