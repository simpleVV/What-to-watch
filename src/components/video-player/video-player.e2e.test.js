import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});


describe(`The component interactivity`, () => {
  it(`Video player have playback state`, () => {
    const mockPreview = `ht,tps://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
    const mockPoster = `img/johnny-english.jpg`;
    const isPlaying = true;
    const videoPlayer = shallow(<VideoPlayer
      preview = {mockPreview}
      poster = {mockPoster}
      isPlaying = {isPlaying}
    />);

    expect(videoPlayer.state(`isPlaying`)).toEqual(true);
  });
  it(`Video player have pause state`, () => {
    const mockPreview = `ht,tps://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
    const mockPoster = `img/johnny-english.jpg`;
    const isPlaying = false;
    const videoPlayer = shallow(<VideoPlayer
      preview = {mockPreview}
      poster = {mockPoster}
      isPlaying = {isPlaying}
    />);

    expect(videoPlayer.state(`isPlaying`)).toEqual(false);
  });
});
