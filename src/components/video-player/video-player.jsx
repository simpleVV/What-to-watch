import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerTimer from '../video-player-timer/video-player-timer.jsx';

const VideoPlayer = (props) => {
  const {
    renderVideo,
    onPlaybackActivate,
    onFullScreenActivate,
    isPlaying,
    duration,
    progress,
    title
  } = props;

  return (
    <div className="player">
      {renderVideo()}
      <button
        type="button"
        className="player__exit"
        onClick = {() => {
          location.pathname = `/films`;
        }}
      >
      Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <VideoPlayerTimer
            isTimerStart = {isPlaying}
            duration = {duration}
            progress = {progress}
          />
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick = {onPlaybackActivate}
          >
            {!isPlaying ?
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              :
              <svg viewBox="0 0 14 21" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
            }
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick = {onFullScreenActivate}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  renderVideo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onPlaybackActivate: PropTypes.func.isRequired,
  onFullScreenActivate: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  progress: PropTypes.number,
};

export default VideoPlayer;
