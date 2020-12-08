import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieCardButton from './movie-card-buttons.jsx';

Enzyme.configure({adapter: new Adapter()});

const playButtonClickHandler = jest.fn();

describe(`The component interactivity`, () => {
  it(`Will be called callback, if click on play button click`, () =>{
    const movieCardButton = mount(<MovieCardButton
      isMoviePage = {false}
      onPlayButtonClick = {playButtonClickHandler}
    />);

    const playButton = movieCardButton.find(`.btn--play`);
    playButton.simulate(`click`, (evt) => {
      evt.preventDefault();
    });

    expect(playButtonClickHandler).toHaveBeenCalledTimes(1);
  });
});
