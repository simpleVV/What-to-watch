import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mockPreview = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const mockPoster = `img/johnny-english.jpg`;
const isPlaying = false;

describe(`The component is rendered correctly`, () => {
  it(`Video player correctly renders with transferred mock data`, () => {
    const videoPlayer = renderer
    .create(<VideoPlayer
      preview = {mockPreview}
      poster = {mockPoster}
      isPlaying = {isPlaying}
    />);

    expect(videoPlayer).toMatchSnapshot();
  });
});
