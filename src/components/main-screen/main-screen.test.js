import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Main screen correctly renders with transferred movies title`, () => {
    const titles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
    const mainScreen = renderer
    .create(<MainScreen
      moviesTitle = {titles}
    />)
    .toJSON();

    expect(mainScreen).toMatchSnapshot();
  });
});
