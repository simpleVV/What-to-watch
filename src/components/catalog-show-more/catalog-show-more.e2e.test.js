import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CatalogShowMore from './catalog-show-more.jsx';

Enzyme.configure({adapter: new Adapter()});

const showMoreButtonClickHandler = jest.fn();

describe(`The component interactivity`, () => {
  it(`Will be called callback, if user click on button`, () => {
    const catalogShowMore = shallow(<CatalogShowMore
      onShowMoreButtonClick={showMoreButtonClickHandler}
      maxFilmsPerPage = {false}
    />);

    const showMoreButton = catalogShowMore.find(`.catalog__button`);

    showMoreButton.simulate(`click`);

    expect(showMoreButtonClickHandler).toHaveBeenCalledTimes(1);
  });
});
