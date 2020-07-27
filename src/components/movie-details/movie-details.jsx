import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const {
    id,
    genre,
    details
  } = props;
  const {
    releaseDate,
    director,
    starring,
    runTime
  } = details;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((star) => {
              return <React.Fragment key = {star + id}>
                {star},<br/>
              </React.Fragment>;
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]),
  details: PropTypes.shape(
      {
        runTime: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf[PropTypes.string.isRequired]
      }
  )
};

export default MovieDetails;
