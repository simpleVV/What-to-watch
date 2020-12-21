import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {getFilms} from '../data/selectors.js';

export const getCurrentGenre = (state) => state[NameSpace.APP_STATE].currentGenre;
export const getSelectedFilm = (state) => state[NameSpace.APP_STATE].selectedFilm;
export const getFilmsPerPage = (state) => state[NameSpace.APP_STATE].filmsPerPage;
export const getIsFilmPlay = (state) => state[NameSpace.APP_STATE].isFilmPlay;

export const getFilteredFilms = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => (genre === `All genres`) ? films : films.filter((film) => film.genre === genre)
);

export const getSimilarFilms = createSelector(
    getFilteredFilms,
    getFilmsPerPage,
    (films, length) => {
      const similarFilms = [...films];
      similarFilms.length = (films.length < length) ? films.length : length;

      return similarFilms;
    }
);

export const getAllGenres = createSelector(
    getFilms,
    (films) => {
      const filmGenres = new Set();
      for (const film of films) {
        filmGenres.add(film.genre);
      }

      const genres = [`All genres`, ...filmGenres];

      return genres;
    }
);

export const getNumberAllFilms = createSelector(
    getFilms,
    (films) => films.length
);

export const getIsMaxNumberFilms = createSelector(
    getFilmsPerPage,
    getFilteredFilms,
    (number, films) => (number >= films.length) ? true : false
);
