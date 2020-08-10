import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const SmallMovieCardWrapped = withActiveItem(SmallMovieCard);

const MovieList = (props) => {
  const {
    movies,
  } = props;

  return <div className="catalog__movies-list">
    {movies.map((movie) =>
      <SmallMovieCardWrapped
        key = {movie.id}
        movie = {movie}
        onTitleClick = {() => {}}
      />)}
  </div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      SmallMovieCard.propTypes.movie
  ).isRequired,
};

export default MovieList;
