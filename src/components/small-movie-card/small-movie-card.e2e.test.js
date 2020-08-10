import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const titleClickHandler = jest.fn();
const movieCardEnterHandler = jest.fn();
const movieCardLeaveHandler = jest.fn();

const mockMovie = {
  id: `d90f:fc74:a512:6497:6aab:537:251c:c35a`,
  genre: `Comedies`,
  title: `Johnny English`,
  image: `img/johnny-english.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`The component interactivity`, () => {
  it(`Will be called callback, if click on movie title`, () => {
    const movieCard = mount(<SmallMovieCard
      isPlaying = {false}
      movie = {mockMovie}
      onTitleClick = {titleClickHandler}
      onItemActivate = {movieCardEnterHandler}
      onItemDisable = {movieCardLeaveHandler}
    />);

    const title = movieCard.find(`.small-movie-card__title`);
    title.simulate(`click`);

    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Will be called callback after 1 second, when user hover on movie card`, () => {
    jest.useFakeTimers();

    const movieCard = mount(<SmallMovieCard
      isPlaying = {true}
      movie = {mockMovie}
      onItemActivate = {movieCardEnterHandler}
      onItemDisable = {movieCardLeaveHandler}
      onTitleClick = {titleClickHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseenter`);
    jest.runAllTimers();

    expect(movieCardEnterHandler).toHaveBeenCalledTimes(1);
  });

  it(`Will be called callback, when user leave movie card`, () => {
    const movieCard = mount(<SmallMovieCard
      isPlaying = {false}
      movie = {mockMovie}
      onItemActivate = {movieCardEnterHandler}
      onItemDisable = {movieCardLeaveHandler}
      onTitleClick = {titleClickHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseleave`);

    expect(movieCardLeaveHandler).toHaveBeenCalledTimes(1);
  });
});
