import {ActionType} from './data.js';
import createAPI from '../../api.js';
import adaptFilms from '../../adapter/adapter.js';
import MockAdapter from 'axios-mock-adapter';
import {
  ActionCreator,
  Operation
} from './data-action-creator.js';

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

const mockFilmsList = [
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

describe(`Action creator work correctly`, () => {
  it(`Action creator correctly load films`, () => {
    expect(ActionCreator.loadFilms(mockFilmsList))
      .toEqual({
        type: ActionType.LOAD_FILMS,
        payload: mockFilmsList
      });
  });

  it(`Action creator correctly load promo film`, () => {
    const mockPromo = {
      id: `1`,
      genre: `Comedies`,
      title: `Johnny English`,
    };

    expect(ActionCreator.loadPromo(mockPromo))
      .toEqual({
        type: ActionType.LOAD_PROMO,
        payload: mockPromo
      });
  });

  it(`Should make a correct API call to /films`, () => {
    const filmsLoader = Operation.loadFilms();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films`)
      .reply(200, [
        {
          fake: true
        }
      ]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [
            adaptFilms({
              fake: true
            })
          ]
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const promoLoader = Operation.loadPromo();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [
        {
          fake: true
        }
      ]);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adaptFilms({
            fake: true
          })
        });
      });
  });
});
