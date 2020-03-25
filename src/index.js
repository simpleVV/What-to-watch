import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const init = (movies) => {

  ReactDom.render(
      <App
        movies = {movies}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
