import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayerTimer from './video-player-timer.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Video player timer correctly renders with transferrd mock time`, () => {
    const videoPlayerTimer = renderer
    .create(<VideoPlayerTimer
      seconds = {10}
      minutes = {34}
      hours = {1}
    />)
    .toJSON();

    expect(videoPlayerTimer).toMatchSnapshot();
  });
});
