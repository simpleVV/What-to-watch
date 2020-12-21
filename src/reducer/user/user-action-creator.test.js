import {ActionType} from './user.js';
import createAPI from '../../api.js';
import MockAdapter from 'axios-mock-adapter';
import {
  ActionCreator,
  Operation
} from './user-action-creator.js';

const api = createAPI(() => {});

describe(`Action creator work correctly`, () => {
  it(`Action creator correctly change authorization status`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`))
    .toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    });

    expect(ActionCreator.requireAuthorization(`NO_AUTH`))
    .toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `NO_AUTH`
    });
  });

  it(`Action creator correctly create error massege`, () =>{
    expect(ActionCreator.createErrorMassege())
    .toEqual({
      type: ActionType.CREATE_ERROR,
      payload: true
    });
  });

  it(`Should successfully authorize the user then API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockUserData = {
      email: `bob@mail.ru`,
      password: `123`
    };
    const login = Operation.login(mockUserData);

    apiMock
      .onPost(`/login`)
      .reply(200);

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: `AUTH`
        });
      });
  });

  it(`Should create error if response status equal 400`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockUserData = {
      email: `bob@mail.ru`,
      password: `123`
    };
    const login = Operation.login(mockUserData);

    apiMock
      .onPost(`/login`)
      .reply(400);

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CREATE_ERROR,
          payload: true
        });
      });
  });
});
