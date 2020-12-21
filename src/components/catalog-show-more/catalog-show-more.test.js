import React from 'react';
import renderer from 'react-test-renderer';

import {CatalogShowMore} from './catalog-show-more.jsx';

describe(`The component is rendered correctly`, () => {
  it(`The show more button is renders correctly`, () => {
    const catalogShowMore = renderer
    .create(
        <CatalogShowMore
          onShowMoreButtonClick = {jest.fn()}
          isMaxNumberFilms = {false}
          filmsPerPage = {8}
          numberAllFilms = {40}
        />
    )
    .toJSON();

    expect(catalogShowMore).toMatchSnapshot();
  });
});
