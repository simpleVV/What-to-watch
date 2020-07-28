import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';

import withVideo from './with-video.js';

Enzyme.configure({adapter: new Adapter()});

const MockVideoPlayer = (props) => {
  const {
    children,
    onPlayButtonClick,
  } = props;

  return (
    <div>
      <button onClick = {onPlayButtonClick}/>
      {children}
    </div>
  );
};

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.HTMLMediaElement.prototype.load = () => {};

MockVideoPlayer.propTypes = {
  onVideoReset: PropTypes.func,
  onPlayButtonClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

describe(`The component interactivity`, () => {
  it(`Turn on video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {true}
      onPlayButtonClick = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `play`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`button`);
    button.simulate(`click`);

    expect(onPlayButtonClickHandler).toHaveBeenCalledTimes(1);
    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });
  it(`Turn off video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {false}
      onPlayButtonClick = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `pause`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`button`);
    button.simulate(`click`);

    expect(onPlayButtonClickHandler).toHaveBeenCalledTimes(1);
    expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
  });
  it(`reset video`, () => {
    const MockVideoPlayerWrapped = withVideo(MockVideoPlayer);
    const onPlayButtonClickHandler = jest.fn();
    const mockVideoPlayerWrapped = mount(<MockVideoPlayerWrapped
      isPlaying = {false}
      preview = {`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      onPlayButtonClick = {onPlayButtonClickHandler}
    />);

    const {_videoRef} = mockVideoPlayerWrapped.instance();

    jest.spyOn(_videoRef.current, `load`);

    mockVideoPlayerWrapped.instance().componentDidMount();

    const button = mockVideoPlayerWrapped.find(`button`);
    button.simulate(`click`);

    expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
  });
});
