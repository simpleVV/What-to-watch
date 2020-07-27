import React from 'react';
import {Fragment} from 'react';
import {PropTypes} from 'prop-types';

const VideoPlayer = (props) => {
  const {
    children,
    onVideoReset,
  } = props;

  return (
    <Fragment>
      <div className="small-movie-card__image"
        onMouseLeave = {onVideoReset}
      >
        {children}
      </div>
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  onVideoReset: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired
  ]).isRequired,
};

export default VideoPlayer;
