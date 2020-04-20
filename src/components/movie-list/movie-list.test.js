import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie list correctly renders with transferred mock-movies`, () => {
    const mockMovies = [
      {
        genre: `Comedies`,
        title: `Johnny English`,
        image: `img/johnny-english.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        genre: `Crime`,
        title: `Snatch`,
        image: `img/snatch.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        genre: `Crime`,
        title: `Pulp Fiction`,
        image: `img/pulp-fiction.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        genre: `Dramas`,
        title: `Macbeth`,
        image: `img/macbeth.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
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
