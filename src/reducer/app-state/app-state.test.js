import {
  reducer,
  ActionType
} from './app-state.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer should change current genre by a given value`, () => {
    expect(reducer({
      currentGenre: `All genres`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      filmsPerPage: 8
    },
    {
      type: ActionType.CHANGE_GENRE,
      payload: `Crime`
    }
    )).toEqual({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      filmsPerPage: 8
    });
  });

  it(`Reducer should increment current films per page by a given value`, () => {
    expect(reducer({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      filmsPerPage: 8
    },
    {
      type: ActionType.SHOW_MORE_FILMS,
      payload: 20
    }
    )).toEqual({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      filmsPerPage: 28
    });
  });
});
