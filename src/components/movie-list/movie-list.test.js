import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie list correctly renders with transferred mock-movies`, () => {
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
      },
      {
        genre: `Dramas`,
        title: `Macbeth`,
        image: `img/macbeth.jpg`
      }
    ];

    const movieList = renderer
    .create(<MovieList
      movies = {mockMovies}
    />)
    .toJSON();

    expect(movieList).toMatchSnapshot();
  });
});
