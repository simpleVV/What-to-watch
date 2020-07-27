import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mockElement = <video/>;

describe(`The component is rendered correctly`, () => {
  it(`Video player correctly renders with transferred mock data`, () => {
    const videoPlayer = renderer
    .create(<VideoPlayer
      onVideoReset = {jest.fn()}
    >
      {mockElement}
    </VideoPlayer>)
    .toJSON();

    expect(videoPlayer).toMatchSnapshot();
  });
});
