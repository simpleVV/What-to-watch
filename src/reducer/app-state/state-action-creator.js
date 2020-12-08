import {ActionType} from './app-state.js';

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),

  showMoreFilms: (currentFilms, filmNumber) => {
    const moreFilms = 20;

    return {
      type: ActionType.SHOW_MORE_FILMS,
      payload: (currentFilms + moreFilms <= filmNumber) ? moreFilms : filmNumber - currentFilms
    };
  },

  selectFilm: (films) => ({
    type: ActionType.SELECT_FILM,
    payload: films
  }),

  playFilm: (isRun) => ({
    type: ActionType.PLAY_FILM,
    payload: isRun
  })
};

export {ActionCreator};
