import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBg = (props) => {
  const {
    bigPoster,
    title
  } = props;

  return (
    <div className="movie-card__bg">
      <img src={bigPoster} alt={title} />
    </div>
  );

};

MovieCardBg.propTypes = {
  title: PropTypes.string.isRequired,
  bigPoster: PropTypes.string.isRequired,
};

export default MovieCardBg;
