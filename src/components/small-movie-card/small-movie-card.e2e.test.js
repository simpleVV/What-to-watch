import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardTemplate from './small-movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`The component interactivity`, () => {
  it(`Will be called callback, if click on movie title`, () => {
    const titleClickHandler = jest.fn();
    const mockMovie = {
      genre: `Comedies`,
      title: `Johnny English`,
      image: `img/johnny-english.jpg`
    };
    const movieCard = shallow(<MovieCardTemplate
      movie = {mockMovie}
      onTitleClick = {titleClickHandler}
    />);

    const title = movieCard.find(`.small-movie-card__title`);
    title.simulate(`click`);

    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });
  it(`Will add movie info in callback, then user hover on movie card`, () => {
    const mockMovie = {
      genre: `Comedies`,
      title: `Johnny English`,
      image: `img/johnny-english.jpg`
    };
    const movieCardEnterHandler = jest.fn();
    const movieCard = shallow(<MovieCardTemplate
      movie = {mockMovie}
      onMovieCardEnter = {movieCardEnterHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseenter`);

    expect(movieCardEnterHandler).toHaveBeenCalledTimes(1);
    expect(movieCardEnterHandler.mock.calls[0][0]).toEqual(mockMovie);
  });
  it(`Remove movie info from callback, then user hover on movie card`, () => {
    const mockMovie = {
      genre: `Comedies`,
      title: `Johnny English`,
      image: `img/johnny-english.jpg`
    };
    const movieCardLeaveHandler = jest.fn();
    const movieCard = shallow(<MovieCardTemplate
      movie = {mockMovie}
      onMovieCardLeave = {movieCardLeaveHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseleave`);

    expect(movieCardLeaveHandler).toHaveBeenCalledTimes(1);
  });
});
