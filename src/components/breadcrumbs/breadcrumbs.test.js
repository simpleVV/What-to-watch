import React from 'react';
import renderer from 'react-test-renderer';

import BreadCrumbs from './breadcrumbs.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Breadcrumbs renders correctly`, () => {
    const breadcrumbs = renderer
    .create(
        <BreadCrumbs
          title = {`The Grand Budapest Hotel`}
        />
    );

    expect(breadcrumbs).toMatchSnapshot();
  });
});
