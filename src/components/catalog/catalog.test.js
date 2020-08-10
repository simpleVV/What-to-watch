import React from 'react';
import renderer from 'react-test-renderer';

import Catalog from './catalog.jsx';

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
  }
];
const mockGenres = [`All genres`, `Crime`, `Comedies`];

describe(`The component is rendered correctly`, () => {
  it(`Catalog correctly renders with transferrd mock data`, () => {
    const catalog = renderer
    .create(<Catalog
      movies = {mockMovies}
      allGenres = {mockGenres}
      moviesPerPage = {8}
      currentGenre = {`All genres`}
      onGenreClick = {jest.fn}
      onShowMoreButtonClick = {jest.fn}
    />)
    .toJSON();

    expect(catalog).toMatchSnapshot();
  });
});
