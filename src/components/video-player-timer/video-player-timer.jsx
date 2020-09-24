import React from 'react';
import {PureComponent} from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

class VideoPlayerTimer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      duration,
      progress
    } = this.props;

    const timeLeft = duration - progress;

    const [
      secondsLeft,
      minutes,
      hours
    ] = this._convertTime(timeLeft);

    return (
      <Fragment>
        <div className="player__time">
          <progress
            className="player__progress"
            value={Math.floor(progress)} max={Math.floor(duration)}>
          </progress>
          <div
            className="player__toggler"
            style={{left: `${(Math.floor(progress)) * 100 / Math.floor(duration)}%`}}>
          Toggler
          </div>
        </div>
        <div
          className="player__time-value">
          {
            `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${secondsLeft.toString().padStart(2, `0`)}`
          }
        </div>
      </Fragment>
    );
  }

  _convertTime(time) {
    const secInMin = 60;
    const minInHour = 60;
    const secondsLeft = Math.floor(time % secInMin);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time / secInMin) - hours * minInHour);

    return [secondsLeft, minutes, hours];
  }
}


VideoPlayerTimer.propTypes = {
  duration: PropTypes.number,
  progress: PropTypes.number,
};

export default VideoPlayerTimer;
