import React from 'react';
import PropTypes from 'prop-types';

const MovieOverview = (props) => {
  const {details} = props;
  const {
    ratingScore,
    ratingLevel,
    ratingCount,
    description,
    director,
    starring
  } = details;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  details: PropTypes.shape(
      {
        releaseDate: PropTypes.number.isRequired,
        bigPoster: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        ratingLevel: PropTypes.string.isRequired,
        ratingScore: PropTypes.string.isRequired,
        ratingCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired
      }
  )
};

export default MovieOverview;
