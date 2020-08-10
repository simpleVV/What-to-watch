import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const mockComponent = <div>Hello World</div>;


describe(`The component is rendered correctly`, () => {
  it(`Movie card correctly renders with mock components`, () => {
    const movieCard = renderer
      .create(
          <MovieCard>
            {mockComponent}
          </MovieCard>
      )
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
