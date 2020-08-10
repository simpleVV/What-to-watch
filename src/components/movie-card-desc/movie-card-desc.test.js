import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardDesc from './movie-card-desc.jsx';

const mockElement = <div></div>;

describe(`The component is rendered correctly`, () =>{
  it(`Movie card description correctly renders with transferred mock data`, () =>{
    const movieCardDesc = renderer
    .create(<MovieCardDesc
      title = {`Johnny English`}
      genre = {`Comedies`}
      releaseDate = {2014}
    >
      {mockElement}
    </MovieCardDesc>
    )
    .toJSON();

    expect(movieCardDesc).toMatchSnapshot();
  });
});
