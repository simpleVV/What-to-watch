import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
import thunk from 'redux-thunk';
import createAPI from './api.js';
import {Operation as DataOperation} from './reducer/data/data-action-creator.js';
import {Operation as UserOperation} from './reducer/user/user-action-creator.js';
import {ActionCreator as UserActionCreator} from './reducer/user/user-action-creator.js';
import {AuthorizationStatus} from './reducer/user/user.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
  createStore,
  applyMiddleware
} from 'redux';

import App from './components/app/app.jsx';

const onUnauthorized = () =>{
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth);
store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromo());

ReactDom.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
