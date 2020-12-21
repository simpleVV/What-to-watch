import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayerPage from './video-player-page.jsx';

const mockFilm = {
  title: `Snatch`,
  image: `img/johnny-english.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`The component is rendered correctly`, () => {
  it(`Video player page correctly renders with transferred mock data`, () => {
    const videoPlayerPage = renderer
    .create(
        <VideoPlayerPage
          film = {mockFilm}
          isPlaying = {true}
        />
    )
    .toJSON();

    expect(videoPlayerPage).toMatchSnapshot();
  });
});
