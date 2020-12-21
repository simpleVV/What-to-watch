import {
  reducer,
  ActionType,
  AuthorizationStatus
} from './user.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    });
  });

  it(`Reducer should to authorize user successfully`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    },
    {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      error: false,
      userInfo: null
    });
  });

  it(`Reducer shouldn't to authorize user`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    },
    {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    });
  });

  it(`Reducer should throw error`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    },
    {
      type: ActionType.CREATE_ERROR,
      payload: true
    }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: true,
      userInfo: null
    });
  });

  it(`Reducer should save user info`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: null
    },
    {
      type: ActionType.SAVE_USER_INFO,
      payload: {
        email: `bob@mail.ru`,
        password: `123`
      }
    }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      error: false,
      userInfo: {
        email: `bob@mail.ru`,
        password: `123`
      }
    });
  });
});
