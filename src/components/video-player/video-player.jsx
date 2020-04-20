import React from 'react';
import {PureComponent} from 'react';
import {PropTypes} from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeOut = null;
    this._videoRef = React.createRef();
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {
      poster,
      preview
    } = this.props;

    if (video) {
      video.muted = this.props.muted;
      video.src = preview;
      video.poster = poster;
      video.oncanplay = () => this.setState({
        isLoading: false
      });
    }
  }

  componentDidUpdate() {
    const {isLoading} = this.state;

    return (this.props.isPlaying && !isLoading) ? this.videoPlay() : this.videoStop();
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.poster = null;
    video.load = null;
    video.src = ``;
  }

  render() {
    return (
      <React.Fragment>
        <div className="small-movie-card__image">
          <video style={{width: `100%`, height: `100%`, objectFit: `fill`}}
            ref={this._videoRef}
          />
        </div>
      </React.Fragment>
    );
  }

  videoPlay() {
    const video = this._videoRef.current;
    if (video) {
      this._videoTimeOut = setTimeout(() => video.play(), this.props.startTimeOut);
    }
  }

  videoStop() {
    const video = this._videoRef.current;

    if (video) {
      video.load();
      clearTimeout(this._videoTimeOut);
    }
  }
}

VideoPlayer.defaultProps = {
  startTimeOut: 1000,
  muted: true
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string,
  muted: PropTypes.bool,
  startTimeOut: PropTypes.number,
  preview: PropTypes.string.isRequired,
};

export default VideoPlayer;
