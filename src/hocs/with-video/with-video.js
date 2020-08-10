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
      };

      this._playbackActivateHandler = this._playbackActivateHandler.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      const {
        poster,
        preview,
        src,
        muted
      } = this.props;

      if (video) {
        video.muted = muted;
        video.src = (src) ? src : preview;
        video.poster = poster;
        video.preLoad = `none`;

        // video.oncanplay = () => this.setState({
        //   isLoading: false
        // });

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

      return (video && this.props.isPlaying) ? video.play() : video.pause();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.poster = null;
      video.load = null;
      video.src = ``;
    }

    render() {
      const {
      } = this.state;

      const {style} = this.props;

      return (
        <Component
          {...this.props}
          onPlaybackActivate = {this._playbackActivateHandler}
        >
          <video style={style}
            ref={this._videoRef}
          />
        </Component>
      );
    }

    _playHandler() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    _playbackActivateHandler() {
      this.props.onPlaybackActivate();
      this.setState({
        isPlaying: !this.state.isPlaying
      });
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
