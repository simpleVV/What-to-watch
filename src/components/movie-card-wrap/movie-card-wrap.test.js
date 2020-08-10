import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardWrap from './movie-card-wrap.jsx';

const mockElement = <div>Hello World</div>;

describe(`The component is rendered correctly`, () => {
  it(`The Movie-card-wrap correctly renders without transferred prop isTranslateTop`, () => {
    const movieCardWrap = renderer
      .create(
          <MovieCardWrap>
            {mockElement}
          </MovieCardWrap>
      )
      .toJSON();

    expect(movieCardWrap).toMatchSnapshot();
  });

  it(`The Movie-card-wrap correctly renders with transferred prop isTranslateTop`, () => {
    const movieCardWrap = renderer
      .create(
          <MovieCardWrap
            isTranslateTop = {true}
          >
            {mockElement}
          </MovieCardWrap>
      )
      .toJSON();

    expect(movieCardWrap).toMatchSnapshot();
  });
});
