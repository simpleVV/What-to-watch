import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AddReview from './add-review.jsx';

const mockStore = createStore(() => ({
  USER: {
    userInfo: null
  }
}));

describe(`The component is rendered correctly`, () => {
  it(`Add review page correctly renders with transferred mock data`, () => {
    const addReview = renderer
    .create(
        <Provider store = {mockStore}>
          <AddReview
            title = {`The Grand Budapest Hotel`}
            bigPoster = {`img/bg-the-grand-budapest-hotel.jpg`}
            poster = {`img/the-grand-budapest-hotel-poster.jpg`}
          />
        </Provider>
    );

    expect(addReview).toMatchSnapshot();
  });
});
