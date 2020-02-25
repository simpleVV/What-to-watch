import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardTemplate from './small-movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`The component interactivity`, () => {
  it(`Will be called callback, if click on movie title`, () => {
    const titleClickHandler = jest.fn();
    const movieTitle = `Fantastic Beasts: The Crimes of Grindelwald`;
    const movieCard = shallow(<MovieCardTemplate
      title = {movieTitle}
      onTitleClick = {titleClickHandler}
    />);

    const title = movieCard.find(`.small-movie-card__title`);
    title.simulate(`click`);

    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });
});
