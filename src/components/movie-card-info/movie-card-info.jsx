import React from 'react';
import PropTypes from 'prop-types';

const MovieCardInfo = (props) => {
  const {
    poster,
    title,
    isMoviePage,
    children
  } = props;

  return (
    <div className="movie-card__info">
      <div className={`movie-card__poster ${(isMoviePage) ? `movie-card__poster--big` : ``}`}>
        <img src={poster} alt={title} width="218" height="327" />
      </div>
      {children}
    </div>
  );
};

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMoviePage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MovieCardInfo;
