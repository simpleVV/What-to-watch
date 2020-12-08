import React from 'react';
import renderer from 'react-test-renderer';

import SmallMovieCard from './small-movie-card.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie card correctly renders with transferred mock-movie`, () => {
    const mockFilm = {
      id: `d90f:fc74:a512:6497:6aab:537:251c:c35a`,
      genre: `Comedies`,
      title: `Johnny English`,
      image: `img/johnny-english.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };
    const movieCard = renderer
      .create(<SmallMovieCard
        isPlaying = {false}
        film = {mockFilm}
        onTitleClick = {jest.fn()}
        onItemActivate = {jest.fn()}
        onItemDisable = {jest.fn()}
        onMovieCardClick = {jest.fn()}
      />)
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
