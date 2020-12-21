import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './logo.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Logo correctly renders`, () => {
    const logo = renderer
    .create(
        <Logo/>
    )
    .toJSON();

    expect(logo).toMatchSnapshot();
  });
});
