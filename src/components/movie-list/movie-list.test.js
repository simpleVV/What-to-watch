import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie list correctly renders with transferred mock-movies`, () => {
    const mockMovies = [
      {
        id: `d90f:fc74:a512:6497:6aab:537:251c:c35a`,
        genre: `Comedies`,
        title: `Johnny English`,
        image: `img/johnny-english.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        id: `94b2:9524:2d16:7525:dcb8:9540:7ba0:3afc`,
        genre: `Crime`,
        title: `Snatch`,
        image: `img/snatch.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        id: `aa8e:d530:c2f3:1755:12fb:64af:130a:ef47`,
        genre: `Crime`,
        title: `Pulp Fiction`,
        image: `img/pulp-fiction.jpg`,
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        id: `9a58:9bc0:9458:ffe6:7191:e97a:47d0:577`,
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
