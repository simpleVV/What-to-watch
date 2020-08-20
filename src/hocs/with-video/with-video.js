import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: props.isPlaying,
        duration: null
      };

      this._playbackActivateHandler = this._playbackActivateHandler.bind(this);
      this._fullScreenActivateHandler = this._fullScreenActivateHandler.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      const {
        preview,
        src,
        muted,
      } = this.props;

      if (video) {
        video.muted = muted;
        video.src = (src) ? src : preview;
        video.preLoad = `none`;

        video.oncanplay = () => this.setState({
          duration: video.duration
        });

        // video.onplay = () => this.setState({
        //   isPlaying: true
        // });
        //
        // video.onpause = () => this.setState({
        //   isPlaying: false
        // });
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {preview} = this.props;

      if (preview) {
        return (video && this.props.isPlaying) ? video.play() : video.load();
      }

      return (video && !this.state.isPlaying) ? video.play() : video.pause();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      clearInterval(this._durationTimeOut);
      video.poster = null;
      video.load = null;
      video.src = ``;
    }

    render() {
      const {
        style,
        poster
      } = this.props;

      const {
        isPlaying,
        duration
      } = this.state;

      return (
        <Component
          {...this.props}
          onPlaybackActivate = {this._playbackActivateHandler}
          onFullScreenActivate = {this._fullScreenActivateHandler}
          duration = {duration}
          isPlaying = {isPlaying}
          renderVideo = {() => {
            return (
              <video style={style}
                className="player__video"
                poster = {poster}
                ref={this._videoRef}
              />
            );
          }}
        >
        </Component>
      );
    }

    _playbackActivateHandler() {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });
    }

    _fullScreenActivateHandler() {
      const video = this._videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      }

      if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }

      if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      }
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlaybackActivate: PropTypes.func,
    poster: PropTypes.string,
    preview: PropTypes.string,
    src: PropTypes.string,
    muted: PropTypes.bool,
    style: PropTypes.oneOfType([
      PropTypes.object,
    ])
  };

  return WithVideo;
};

export default withVideo;
