import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`The component is rendered correctly`, () => {
  it(`App correctly renders with transferred data`, () => {
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
    const app = renderer
    .create(<App
      movies = {mockMovies}
    />)
      .toJSON();

    expect(app).toMatchSnapshot();
  });
});
