const initialState = {
  currentGenre: `All genres`,
  selectedFilm: null,
  allGenres: [`All genres`],
  filmsPerPage: 8,
  isFilmPlay: false
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  SELECT_FILM: `SELECT_FILM`,
  PLAY_FILM: `PLAY_FILM`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
    case ActionType.SHOW_MORE_FILMS:
      return Object.assign({}, state, {
        filmsPerPage: state.filmsPerPage + action.payload
      });
    case ActionType.SELECT_FILM:
      return Object.assign({}, state, {
        selectedFilm: action.payload
      });
    case ActionType.PLAY_FILM:
      return Object.assign({}, state, {
        isFilmPlay: action.payload
      });
  }

  return state;
};

export {
  reducer,
  ActionType
};
