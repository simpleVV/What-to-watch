import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.initialState = {
        isPlaying: this.props.isPlaying,
        duration: null,
        progress: null
      };

      this.state = this.initialState;

      this._playbackActivateHandler = this._playbackActivateHandler.bind(this);
      this._fullScreenActivateHandler = this._fullScreenActivateHandler.bind(this);
    }

    componentDidMount() {
      const {
        preview,
        src,
        muted,
      } = this.props;

      const promise = new Promise((resolve, reject) => {
        const video = this._videoRef.current;

        if (!video) {
          reject(`Reference to video is not defined`);
        }

        resolve(video);
      });

      promise.then((video) => {
        video.muted = muted;
        video.src = (src) ? src : preview;
        video.preLoad = `none`;

        video.oncanplay = () => this.setState({
          duration: Math.floor(video.duration)
        });

        video.onended = () => {
          this.setState(this.initialState);
        };

        if (!preview) {
          video.ontimeupdate = () => this.setState({
            progress: Math.floor(video.currentTime)
          });
        }
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {preview} = this.props;

      if (preview) {
        return (video && this.props.isPlaying) ? video.play() : video.load();
      }

      return (video && this.state.isPlaying) ? video.play() : video.pause();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      clearInterval(this._durationTimeOut);
      video.oncanplay = null;
      video.onended = null;
      video.ontimeupdate = null;
      video.poster = null;
      video.load = null;
      video.src = ``;
    }

    render() {
      const {
        style,
        poster,
      } = this.props;

      const {
        isPlaying,
        duration,
        progress
      } = this.state;

      return (
        <Component
          {...this.props}
          onPlaybackActivate = {this._playbackActivateHandler}
          onFullScreenActivate = {this._fullScreenActivateHandler}
          duration = {duration}
          progress = {progress}
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
        />
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
