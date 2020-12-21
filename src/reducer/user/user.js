const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  error: false,
  userInfo: null
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  CREATE_ERROR: `CREATE_ERROR`,
  SAVE_USER_INFO: `SAVE_USER_INFO`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    case ActionType.CREATE_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    case ActionType.SAVE_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload
      });
  }
  return state;
};

export {
  reducer,
  ActionType,
  AuthorizationStatus
};
