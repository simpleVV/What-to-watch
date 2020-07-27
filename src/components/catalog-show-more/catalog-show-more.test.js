import React from 'react';
import renderer from 'react-test-renderer';

import CatalogShowMore from './catalog-show-more.jsx';

describe(`The component is rendered correctly`, () => {
  it(`The show more button is renders correctly`, () => {
    const catalogShowMore = renderer
    .create(<CatalogShowMore
      onShowMoreButtonClick = {jest.fn()}
      maxMoviesPerPage = {false}
    />)
    .toJSON();

    expect(catalogShowMore).toMatchSnapshot();
  });
});
