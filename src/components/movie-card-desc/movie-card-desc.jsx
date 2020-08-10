import React from 'react';
import PropTypes from 'prop-types';

const MovieCardDesc = (props) => {
  const {
    title,
    genre,
    releaseDate,
    children
  } = props;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{releaseDate}</span>
      </p>
      {children}
    </div>
  );
};

MovieCardDesc.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]).isRequired,
  releaseDate: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MovieCardDesc;
