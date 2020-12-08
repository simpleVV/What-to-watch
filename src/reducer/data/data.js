import {emptyFilm} from '../../mocks/films.js';

const initialState = {
  fullFilmList: [],
  promoFilm: emptyFilm,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        fullFilmList: action.payload
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promoFilm: action.payload
      });
  }
  return state;
};

export {
  reducer,
  ActionType
};
