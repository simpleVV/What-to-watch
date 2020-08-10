import {ActionCreator, filterMoviesByGenre} from './action-creator.js';

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

describe(`Business logic is correct`, () => {
  it(`Filter movies by genre work correctly`, () => {

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

    expect(ActionCreator.filterMovies(`All genres`, mockMovieList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: mockMovieList
    });
  });

  it(`Action creator return action with specific genre in payload if was selected current genre`, () => {

    expect(ActionCreator.filterMovies(`Crime`, mockMovieList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: [
        {
          genre: `Crime`
        }
      ]
    });

    expect(ActionCreator.filterMovies(`Dramas`, mockMovieList)).toEqual({
      type: `FILTER_MOVIES`,
      payload: [
        {
          genre: `Dramas`
        }
      ]
    });
  });

  it(`Action creator for show more movies return action with 20 payload`, () => {
    const currentMovies = 8;
    const allMovies = 40;

    expect(ActionCreator.showMoreMovies(currentMovies, allMovies)).toEqual({
      type: `SHOW_MORE_MOVIES`,
      payload: 20
    });
  });

  it(`Action creator for show more movies return action with difference in the number between current movies and all movies`, () => {
    const currentMovies = 8;
    const allMovies = 20;

    expect(ActionCreator.showMoreMovies(currentMovies, allMovies)).toEqual({
      type: `SHOW_MORE_MOVIES`,
      payload: 12
    });
  });
});
