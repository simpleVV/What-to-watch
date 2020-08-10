import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardButtons from './movie-card-buttons.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Movie-card-buttons component correctly renders with add review button`, () => {
    const movieCardButtons = renderer
    .create(<MovieCardButtons
      isMoviePage = {true}
    />)
    .toJSON();

    expect(movieCardButtons).toMatchSnapshot();
  });
  it(`Movie-card-buttons component correctly renders without add review button`, () => {
    const movieCardButtons = renderer
    .create(<MovieCardButtons
      isMoviePage = {false}
    />)
    .toJSON();

    expect(movieCardButtons).toMatchSnapshot();
  });
});
