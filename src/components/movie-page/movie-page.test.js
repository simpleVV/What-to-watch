import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {MoviePage} from './movie-page.jsx';

const mockFilm = {
  id: `d90f:fc74:a512:6497:6aab:537:251c:c35a`,
  genre: `Comedies`,
  title: `Johnny English`,
  image: `img/johnny-english.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  details: {
    releaseDate: 2014,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

      <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ratingLevel: `Very good`,
    ratingScore: `8,9`,
    ratingCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`]
  },
  reviews: [
    {
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      rating: `8,9`
    }
  ]
};

const mockFilms = [
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

const mockStore = createStore(() => ({
  APP_STATE: {
    currentGenre: `All genres`,
    filmsPerPage: 8
  },
  DATA: {
    fullFilmList: mockFilms,
    filteredFilms: mockFilms,
  },
  USER: {
    userInfo: null
  }
}));

describe(`The component is rendered correctly`, () => {
  it(`Movie page correctly renders with transferred mock data`, () => {
    const moviePage = renderer
    .create(
        <Provider store = {mockStore}>
          <MoviePage
            film = {mockFilm}
            onMovieCardClick = {jest.fn()}
            onPlayButtonClick = {jest.fn()}
          />
        </Provider>
    )
    .toJSON();

    expect(moviePage).toMatchSnapshot();
  });
});
