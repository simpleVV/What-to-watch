import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayerTimer from './video-player-timer.jsx';

describe(`The component is rendered correctly`, () => {
  it(`Video player timer correctly renders with transferrd mock time`, () => {
    const videoPlayerTimer = renderer
    .create(<VideoPlayerTimer
      duration = {33}
      progress = {6}
    />)
    .toJSON();

    expect(videoPlayerTimer).toMatchSnapshot();
  });
});
