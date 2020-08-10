import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardInfo from './movie-card-info.jsx';

const mockComponent = <div>Hello World</div>;

describe(`The component is rendered correctly`, () => {
  it(`Movie-card-info correctly renders with transferred mock data`, () => {
    const movieCardInfo = renderer
      .create(
          <MovieCardInfo
            poster = {`img/the-grand-budapest-hotel-poster.jpg`}
            title = {`Johnny English`}
            isMoviePage = {false}
          >
            {mockComponent}
          </MovieCardInfo>
      )
      .toJSON();

    expect(movieCardInfo).toMatchSnapshot();
  });

  it(`Movie-card-info correctly renders with transferred isMoviePage prop`, () => {
    const movieCardInfo = renderer
      .create(
          <MovieCardInfo
            poster = {`img/the-grand-budapest-hotel-poster.jpg`}
            title = {`Johnny English`}
            isMoviePage = {true}
          >
            {mockComponent}
          </MovieCardInfo>
      )
      .toJSON();

    expect(movieCardInfo).toMatchSnapshot();
  });
});
