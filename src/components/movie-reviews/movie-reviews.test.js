import React from 'react';
import renderer from 'react-test-renderer';

import MovieReviews from './movie-reviews.jsx';

const mockReviews = [
  {
    author: `Kate Muir`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `December 24, 2016`,
    rating: `8,9`
  },
  {
    author: `Bill Goodykoontz`,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    date: `November 18, 2015`,
    rating: `8,0`
  }
];

describe(`The component is rendered correctly`, () => {
  it(`Movie reviews correctly renders with transferred mock reviews`, () => {
    const moviePageReviews = renderer
    .create(<MovieReviews
      id = {`d90f:fc74:a512:6497:6aab:537:251c:c35a`}
      reviews = {mockReviews}
    />)
    .toJSON();

    expect(moviePageReviews).toMatchSnapshot();
  });
});
