import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

const mockComponent = <div></div>;

describe(`The component is rendered correctly`, () => {
  it(`Header correctly renders with transferred mock children`, () => {
    const header = renderer
    .create(
        <Header>
          {mockComponent}
        </Header>
    )
    .toJSON();

    expect(header).toMatchSnapshot();
  });
});
