import React from 'react';
import renderer from 'react-test-renderer';

import MainScreen from './main-screen.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Main screen correctly renders with transferred mock-movies title`, () => {
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
    const mockCurrentGenre = `All genres`;

    const mainScreen = renderer
    .create(<MainScreen
      movies = {mockMovies}
      currentGenre = {mockCurrentGenre}
      moviesPerPage = {8}
      allGenres = {mockGenres}
      onGenreClick = {jest.fn()}
      onShowMoreButtonClick = {jest.fn()}
    />)
    .toJSON();

    expect(mainScreen).toMatchSnapshot();
  });
});
