import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieCardTemplate from './small-movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const titleClickHandler = jest.fn();
const movieCardEnterHandler = jest.fn();
const movieCardLeaveHandler = jest.fn();

const mockMovie = {
  genre: `Comedies`,
  title: `Johnny English`,
  image: `img/johnny-english.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`The component interactivity`, () => {
  it(`Will be called callback, if click on movie title`, () => {
    const movieCard = mount(<MovieCardTemplate
      isPlaying = {false}
      movie = {mockMovie}
      onTitleClick = {titleClickHandler}
    />);

    const title = movieCard.find(`.small-movie-card__title`);
    title.simulate(`click`);

    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Will be called callback, then user hover on movie card`, () => {
    const movieCard = mount(<MovieCardTemplate
      isPlaying = {true}
      movie = {mockMovie}
      onMovieCardEnter = {movieCardEnterHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseenter`);

    expect(movieCardEnterHandler).toHaveBeenCalledTimes(1);
  });

  it(`Will be called callback, then user leave movie card`, () => {
    const movieCard = mount(<MovieCardTemplate
      isPlaying = {false}
      movie = {mockMovie}
      onMovieCardLeave = {movieCardLeaveHandler}
    />);

    const smallMovieCard = movieCard.find(`.small-movie-card`);

    smallMovieCard.simulate(`mouseleave`);

    expect(movieCardLeaveHandler).toHaveBeenCalledTimes(1);
  });
});
