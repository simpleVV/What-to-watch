import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';

import withVideo from './with-video.js';

Enzyme.configure({adapter: new Adapter()});

const MockVideoPlayer = (props) => {
  const {
    renderVideo,
    onPlaybackActivate,
    onFullScreenActivate
  } = props;

  return (
    <div>
      <button
        className="play"
        onClick = {onPlaybackActivate}
      />
      <button
        className="fullScreen"
        onClick = {onFullScreenActivate}
      />
      {renderVideo()}
    </div>
  );
};

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.load = () => {};

MockVideoPlayer.propTypes = {
  onPlaybackActivate: PropTypes.func,
  onFullScreenActivate: PropTypes.func,
  renderVideo: PropTypes.func.isRequired
};

describe(`The component interactivity`, () => {
  it(`Turn on video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {true}
      onPlaybackActivate = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `play`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`.play`);
    button.simulate(`click`);

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });
  it(`Turn off video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {false}
      onPlaybackActivate = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `pause`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`.play`);
    button.simulate(`click`);

    expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
  });
  it(`reset video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {false}
      preview = {`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      onPlaybackActivate = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `load`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`.play`);
    button.simulate(`click`);

    expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
  });
  it(`Set full screen`, () => {
    HTMLVideoElement.prototype.requestFullscreen = jest.fn();

    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {false}
      onFullScreenActivate = {jest.fn()}
    />);

    const button = mockVideoPlayerWrapped.find(`.fullScreen`);

    button.simulate(`click`);

    expect(HTMLVideoElement.prototype.requestFullscreen).toHaveBeenCalledTimes(1);


  });
});
