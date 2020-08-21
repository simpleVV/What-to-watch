import React from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

const VideoPlayerTimer = (props) => {
  const {
    seconds,
    minutes,
    hours
  } = props;

  return (
    <Fragment>
      <div className="player__time">
        <progress className="player__progress" value="30" max="100"></progress>
        <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{`${hours}:${minutes}:${seconds}`}</div>
    </Fragment>
  );
};

VideoPlayerTimer.propTypes = {
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  hours: PropTypes.number
};

export default VideoPlayerTimer;
