import React from 'react';
import PropTypes from 'prop-types';

const MovieCardTemplate = ({movie, onMovieCardEnter, onMovieCardLeave, onTitleClick}) => {
  const {title, image} = movie;
  return <article className="small-movie-card catalog__movies-card" onMouseEnter={(evt) => onMovieCardEnter(movie, evt)}
    onMouseLeave={(evt) => onMovieCardLeave(evt)}>
    <div className="small-movie-card__image">
      <img src={image} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onTitleClick}>
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};

MovieCardTemplate.propTypes = {
  movie: PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        image: PropTypes.string
      }
  ),
  onTitleClick: PropTypes.func,
  onMovieCardEnter: PropTypes.func,
  onMovieCardLeave: PropTypes.func
};

export default MovieCardTemplate;
