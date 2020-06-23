import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tabs from './tabs.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`The component interactivity`, () => {
  it(`Will switch on tab, if user click on it`, () => {
    const tabClickHandler = jest.fn();
    const mockId = `d90f:fc74:a512:6497:6aab:537:251c:c35a`;
    const mockGenre = `Crime`;
    const mockDetails = {
      releaseDate: 2014,
      runTime: `1h 39m`,
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

    const tabs = mount(<Tabs
      id = {mockId}
      genre = {mockGenre}
      details = {mockDetails}
      reviews = {mockReviews}
      onTabClick = {tabClickHandler}
    />);

    const tab = tabs.find(`.movie-nav__link`).at(1);
    expect(tabs.state(`tabName`)).toEqual(`Overview`);

    tab.simulate(`click`);

    expect(tabs.state(`tabName`)).toEqual(`Details`);
  });
});
