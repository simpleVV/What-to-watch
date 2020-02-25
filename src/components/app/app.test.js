import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`The component is rendered correctly`, () => {
  it(`App correctly renders with transferred data`, () => {
    const titles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
    const app = renderer
    .create(<App
      moviesTitle = {titles}
    />)
      .toJSON();

    expect(app).toMatchSnapshot();
  });
});
