import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {App} from './app.jsx';

const mockMovies = [
  {
    id: `d90f:fc74:a512:6497:6aab:537:251c:c35a`,
    genre: `Comedies`,
    title: `Johnny English`,
    image: `img/johnny-english.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    details: {
      releaseDate: 2014,
      bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
    }
  },
  {
    id: `94b2:9524:2d16:7525:dcb8:9540:7ba0:3afc`,
    genre: `Crime`,
    title: `Snatch`,
    image: `img/snatch.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    details: {
      releaseDate: 2014,
      bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
    }
  },
];
const mockStore = createStore(() => ({
  currentGenre: `All genres`,
  allGenres: [`All genres`, `Crime`, `Dramas`],
  fullMovieList: mockMovies,
  filteredMovies: mockMovies,
  moviesPerPage: 8
}));

const mockFilteredMovies = mockMovies.filter((it) => it.genre === `Comedies`);

describe(`The component is rendered correctly`, () => {
  it(`App correctly renders with transferred data`, () => {
    const app = renderer
    .create(
        <Provider store = {mockStore}>
          <App
            filteredMovies = {mockFilteredMovies}
          />
        </Provider
        >).toJSON();

    expect(app).toMatchSnapshot();
  });
});
