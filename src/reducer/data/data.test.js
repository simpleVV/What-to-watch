import {emptyFilm} from '../../mocks/films.js';
import {
  reducer,
  ActionType
} from './data.js';

const mockFilmsList = [
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

describe(`Reducer works correctly`, () => {
  it(`Reducer should load films`, () => {
    expect(reducer({
      fullFilmList: [],
      promoFilm: emptyFilm
    },
    {
      type: ActionType.LOAD_FILMS,
      payload: mockFilmsList
    }
    )).toEqual({
      fullFilmList: mockFilmsList,
      promoFilm: emptyFilm
    });
  });

  it(`Reducer should load promo film`, () => {
    expect(reducer({
      fullFilmList: [],
      promoFilm: emptyFilm
    },
    {
      type: ActionType.LOAD_PROMO,
      payload: emptyFilm
    }
    )).toEqual({
      fullFilmList: [],
      promoFilm: emptyFilm
    });
  });
});
