import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTemplate from './small-movie-card.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie card correctly renders with transferred title`, () => {
    const movieTitle = `Fantastic Beasts: The Crimes of Grindelwald`;
    const movieCard = renderer
      .create(<MovieCardTemplate
        title = {movieTitle}
      />)
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
