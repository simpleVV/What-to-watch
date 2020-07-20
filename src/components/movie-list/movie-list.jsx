import React from 'react';
import PropTypes from 'prop-types';

import MovieCardTemplate from '../small-movie-card/small-movie-card.jsx';

const MovieList = (props) => {
  const {
    movies,
    onItemActivate,
    onItemDisable,
    activeItem
  } = props;

  return <div className="catalog__movies-list">
    {movies.map((movie) =>
      <MovieCardTemplate
        isPlaying = {activeItem === movie}
        key = {movie.id}
        movie = {movie}
        onMovieCardEnter = {() => onItemActivate(movie)}
        onMovieCardLeave = {onItemDisable}
        onTitleClick = {() => {}}
      />)}
  </div>;
};

MovieList.propTypes = {
  activeItem: MovieCardTemplate.propTypes.movie,
  movies: PropTypes.arrayOf(
      MovieCardTemplate.propTypes.movie
  ).isRequired,
  onItemActivate: PropTypes.func.isRequired,
  onItemDisable: PropTypes.func.isRequired
};

export default MovieList;
