import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`The component is rendered correctly`, () => {
  it(`App correctly renders with transferred data`, () => {
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
