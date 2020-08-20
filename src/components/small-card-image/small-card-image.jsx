import React from 'react';
import {PropTypes} from 'prop-types';

const SmallCardImage = (props) => {
  const {
    renderVideo,
  } = props;

  return (
    <div className="small-movie-card__image">
      {renderVideo()}
    </div>
  );
};

SmallCardImage.propTypes = {
  renderVideo: PropTypes.func.isRequired
};

export default SmallCardImage;
