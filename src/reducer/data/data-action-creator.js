import adaptFilms from '../../adapter/adapter.js';
import {ActionType} from './data.js';

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },

  loadPromo: (promo) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promo
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadFilms(response.data.map((data) => adaptFilms(data))));
    });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromo(adaptFilms(response.data)));
    });
  }
};

export {
  ActionCreator,
  Operation
};
