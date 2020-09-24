import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const playBackActivateHandler = jest.fn();
const fullScreenActivateHandler = jest.fn();

describe(`The component interactivity`, () => {
  it(`Will be called callback, if user click on play button`, () => {
    const videoPlayer = shallow(<VideoPlayer
      renderVideo = {jest.fn()}
      onPlaybackActivate = {playBackActivateHandler}
      onFullScreenActivate = {fullScreenActivateHandler}
      isPlaying = {true}
      duration = {30}
      title = {`Snatch`}
    />);

    const playButton = videoPlayer.find(`.player__play`);
    playButton.simulate(`click`);

    expect(playBackActivateHandler).toHaveBeenCalledTimes(1);
  });

  it(`Will be called callback, if user click on full screen button`, () => {
    const videoPlayer = shallow(<VideoPlayer
      renderVideo = {jest.fn()}
      onPlaybackActivate = {playBackActivateHandler}
      onFullScreenActivate = {fullScreenActivateHandler}
      isPlaying = {false}
      duration = {20}
      title = {`Snatch`}
    />);

    const fullScreenButton = videoPlayer.find(`.player__full-screen`);
    fullScreenButton.simulate(`click`);

    expect(fullScreenActivateHandler).toHaveBeenCalledTimes(1);
  });
});
