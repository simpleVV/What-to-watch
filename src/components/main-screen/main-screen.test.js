import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Main screen correctly renders with transferred mock-movies title`, () => {
    const mockMovies = [
      {
        genre: `Comedies`,
        title: `Johnny English`,
        image: `img/johnny-english.jpg`
      },
      {
        genre: `Crime`,
        title: `Snatch`,
        image: `img/snatch.jpg`
      },
      {
        genre: `Crime`,
        title: `Pulp Fiction`,
        image: `img/pulp-fiction.jpg`
      }
    ];
    const mainScreen = renderer
    .create(<MainScreen
      movies = {mockMovies}
    />)
    .toJSON();

    expect(mainScreen).toMatchSnapshot();
  });
});
