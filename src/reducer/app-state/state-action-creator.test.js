import {ActionType} from './app-state.js';
import {ActionCreator} from './state-action-creator.js';

describe(`Action creator work correctly`, () => {
  it(`Action creator for changing genre returns correct action with current genre`, () => {
    expect(ActionCreator.changeGenre(`Dramas`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    });

    expect(ActionCreator.changeGenre(`Crime`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Crime`
    });
  });

  it(`Action creator for show more movies return action with 20 payload`, () => {
    const currentFilms = 8;
    const allFilms = 40;

    expect(ActionCreator.showMoreFilms(currentFilms, allFilms)).toEqual({
      type: ActionType.SHOW_MORE_FILMS,
      payload: 20
    });
  });

  it(`Action creator for show more movies return action with difference in the number between current films and all films`, () => {
    const currentFilms = 8;
    const allFilms = 20;

    expect(ActionCreator.showMoreFilms(currentFilms, allFilms)).toEqual({
      type: ActionType.SHOW_MORE_FILMS,
      payload: 12
    });
  });
});
