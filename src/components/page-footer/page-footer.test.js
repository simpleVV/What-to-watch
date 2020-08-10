import React from 'react';
import renderer from 'react-test-renderer';

import PageFooter from './page-footer.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Page footer correctly renders`, () => {
    const pageFooter = renderer
      .create(<PageFooter/>)
      .toJSON();

    expect(pageFooter).toMatchSnapshot();
  });
});
