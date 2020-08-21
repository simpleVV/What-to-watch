import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Video player correctly renders, when the video is paused`, () => {
    const videoPlayer = renderer
    .create(<VideoPlayer
      renderVideo = {jest.fn()}
      onPlaybackActivate = {jest.fn()}
      onFullScreenActivate = {jest.fn()}
      isPlaying = {false}
      duration = {30}
    />)
    .toJSON();

    expect(videoPlayer).toMatchSnapshot();
  });

  it(`Video player correctly renders, when the video is played`, () => {
    const videoPlayer = renderer
      .create(<VideoPlayer
        renderVideo = {jest.fn()}
        onPlaybackActivate = {jest.fn()}
        onFullScreenActivate = {jest.fn()}
        isPlaying = {true}
        duration = {20}
      />)
      .toJSON();

    expect(videoPlayer).toMatchSnapshot();
  });
});
