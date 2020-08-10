import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardBg from './movie-card-bg';

describe(`The component is rendered correctly`, () => {
  it(`Movie-card-bg correctly renders with transferred mock data`, () => {
    const movieCardBg = renderer
    .create(<MovieCardBg
      bigPoster = {`img/bg-the-grand-budapest-hotel.jpg`}
      title = {`Johnny English`}
    />)
    .toJSON();
    expect(movieCardBg).toMatchSnapshot();
  });
});
