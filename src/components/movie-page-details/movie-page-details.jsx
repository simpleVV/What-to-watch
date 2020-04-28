import React from 'react';
import PropTypes from 'prop-types';

const MoviePageDetails = (props) => {
  const {movie} = props;
  const {
    genre,
    details
  } = movie;
  const {
    releaseDate,
    director,
    starring,
    runTime
  } = details;

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {starring.map((star, i) => {
            return <React.Fragment key = {star + i}>
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
  </div>;
};

MoviePageDetails.propTypes = {
  movie: PropTypes.shape(
      {
        genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]),
        details: PropTypes.shape(
            {
              runTime: PropTypes.string,
              releaseDate: PropTypes.number,
              director: PropTypes.string,
              starring: PropTypes.arrayOf[PropTypes.string]
            }
        )
      }
  )
};

export default MoviePageDetails;
