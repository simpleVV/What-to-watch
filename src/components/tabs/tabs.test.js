import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './tabs.jsx';

const mockDetails = {
  releaseDate: 2014,
  runTime: `1h 39m`,
  bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  ratingLevel: `Very good`,
  ratingScore: `8,9`,
  ratingCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`]
};
const mockReviews = [
  {
    author: `Kate Muir`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `December 24, 2016`,
    rating: `8,9`
  },
];

describe(`The component is rendered correctly`, () => {
  it(`Tabs correctly renders with transferred mock data`, () => {
    const tabs = renderer
    .create(<Tabs
      id = {`d90f:fc74:a512:6497:6aab:537:251c:c35a`}
      activeItem = {`Overview`}
      genre = {`Crime`}
      details = {mockDetails}
      reviews = {mockReviews}
      onItemActivate = {jest.fn()}
    />)
    .toJSON();

    expect(tabs).toMatchSnapshot();
  });
});
