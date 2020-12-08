import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const SmallMovieCardWrapped = withActiveItem(SmallMovieCard);

const MovieList = (props) => {
  const {
    films,
    onMovieCardClick
  } = props;

  return <div className="catalog__movies-list">
    {films.map((film) =>
      <SmallMovieCardWrapped
        key = {film.id}
        film = {film}
        onMovieCardClick = {onMovieCardClick}
      />)}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      SmallMovieCard.propTypes.film
  ).isRequired,
  onMovieCardClick: SmallMovieCard.propTypes.onMovieCardClick
};

export default MovieList;
