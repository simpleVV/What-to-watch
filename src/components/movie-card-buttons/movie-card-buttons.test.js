import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardButtons from './movie-card-buttons.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie-card-buttons component correctly renders with add review button`, () => {
    const movieCardButtons = renderer
    .create(
        <MovieCardButtons
          isMoviePage = {true}
          onPlayButtonClick = {jest.fn()}
        />
    )
    .toJSON();

    expect(movieCardButtons).toMatchSnapshot();
  });
  it(`Movie-card-buttons component correctly renders without add review button`, () => {
    const movieCardButtons = renderer
    .create(
        <MovieCardButtons
          isMoviePage = {false}
          onPlayButtonClick = {jest.fn()}
        />
    )
    .toJSON();

    expect(movieCardButtons).toMatchSnapshot();
  });
});
