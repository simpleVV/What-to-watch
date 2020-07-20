import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';

import App from './components/app/app.jsx';


const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  ReactDom.render(
      <Provider store = {store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
