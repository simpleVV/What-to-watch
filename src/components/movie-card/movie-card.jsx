import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {
    children,
    isMoviePage
  } = props;

  return (
    <section className={`movie-card ${isMoviePage ? `movie-card--full` : ``}`}>
      {children}
    </section>
  );
};

MovieCard.propTypes = {
  isMoviePage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MovieCard;
