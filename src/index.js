import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    moviesTitle: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`]
  };

  ReactDom.render(
      <App
        moviesTitle = {settings.moviesTitle}
      />,
      document.querySelector(`#root`)
  );
};

init();
