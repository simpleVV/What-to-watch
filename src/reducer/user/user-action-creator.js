import {
  ActionType,
  AuthorizationStatus
} from './user.js';

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  },

  createErrorMassege: () => {
    return {
      type: ActionType.CREATE_ERROR,
      payload: true
    };
  },

  saveUserInfo: (data) => {
    return {
      type: ActionType.SAVE_USER_INFO,
      payload: data
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.post(`/login`)
    .then((response) => {
      if (response.status === `200`) {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      }
    })
    .catch((err) => {
      throw (err);
    });
  },

  login: (userData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: userData.email,
      password: userData.password
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.saveUserInfo(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.createErrorMassege());
      });
  }
};

export {
  ActionCreator,
  Operation
};
