import reducer from './reducer.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer should change current genre by a given value`, () => {
    expect(reducer({
      currentGenre: `All genres`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: [],
      filteredMovies: [],
      moviesPerPage: 8
    },
    {
      type: `CHANGE_GENRE`,
      payload: `Crime`
    }
    )).toEqual({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: [],
      filteredMovies: [],
      moviesPerPage: 8
    });
  });

  it(`Reducer should not filter movies if the genre is not selected`, () => {
    const mockMovieList = [
      {
        genre: `Crime`
      },
      {
        genre: `Horror`
      },
      {
        genre: `Dramas`
      }
    ];

    expect(reducer({
      currentGenre: `All genres`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: mockMovieList,
      filteredMovies: mockMovieList,
      moviesPerPage: 8
    },
    {
      type: `FILTER_MOVIES_BY_GENRE`,
      payload: mockMovieList
    }
    )).toEqual({
      currentGenre: `All genres`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: mockMovieList,
      filteredMovies: mockMovieList,
      moviesPerPage: 8
    });
  });

  it(`Reducer should filter movies if the genre selected`, () => {
    const mockMovieList = [
      {
        genre: `Crime`
      },
      {
        genre: `Horror`
      },
      {
        genre: `Dramas`
      }
    ];
    const mockFilteredMovieList = mockMovieList.filter((it) => it.genre === `Crime`);

    expect(reducer({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: mockMovieList,
      filteredMovies: mockMovieList,
      moviesPerPage: 8
    },
    {
      type: `FILTER_MOVIES`,
      payload: mockFilteredMovieList
    }
    )).toEqual({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: mockMovieList,
      filteredMovies: mockFilteredMovieList,
      moviesPerPage: 8
    });
  });

  it(`Reducer should increment current movies per page by a given value`, () => {

    expect(reducer({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: [],
      filteredMovies: [],
      moviesPerPage: 8
    },
    {
      type: `SHOW_MORE_MOVIES`,
      payload: 20
    }
    )).toEqual({
      currentGenre: `Crime`,
      allGenres: [`Crime`, `Horror`, `Dramas`],
      fullMovieList: [],
      filteredMovies: [],
      moviesPerPage: 28
    });
  });
});
