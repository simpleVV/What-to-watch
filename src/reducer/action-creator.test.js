import {ActionCreator, filterMoviesByGenre} from './action-creator.js';

describe(`Business logic is correct`, () => {
  it(`Filter movies by genre work correctly`, () => {
    const mockMovieList = [
      {
        genre: `Crime`
      },
      {
        genre: `Dramas`
      },
      {
        genre: `Horror`
      }
    ];

    expect(filterMoviesByGenre(`Crime`, mockMovieList)).toEqual([
      {
        genre: `Crime`
      }
    ]);
  });
});

describe(`Action creator work correctly`, () => {
  it(`Action creator for changing genre returns correct action with current genre`, () => {
    expect(ActionCreator.changeGenre(`Dramas`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Dramas`
    });

    expect(ActionCreator.changeGenre(`Crime`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Crime`
    });
  });

  it(`Action creator return action with default movie list in payload if all genre was selected`, () => {
    const mockMovieList = [
      {
        genre: `Crime`
      },
      {
        genre: `Dramas`
      },
      {
        genre: `Horror`
      }
    ];

    expect(ActionCreator.filterMoviesByGenre(`All genres`, mockMovieList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: mockMovieList
    });
  });

  it(`Action creator return action with specific genre in payload if was selected current genre`, () => {
    const mockMoviesList = [
      {
        genre: `Crime`
      },
      {
        genre: `Dramas`
      },
      {
        genre: `Horror`
      }
    ];

    expect(ActionCreator.filterMoviesByGenre(`Crime`, mockMoviesList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: [
        {
          genre: `Crime`
        }
      ]
    });

    expect(ActionCreator.filterMoviesByGenre(`Dramas`, mockMoviesList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: [
        {
          genre: `Dramas`
        }
      ]
    });
  });
});
