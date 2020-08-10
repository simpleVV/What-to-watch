import React from 'react';
import PropTypes from 'prop-types';

const MovieCardWrap = (props) => {
  const {
    children,
    isTranslateTop
  } = props;

  return (
    <div className={`movie-card__wrap ${(isTranslateTop) ? `movie-card__translate-top` : ``}`}>
      {children}
    </div>
  );
};

MovieCardWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isTranslateTop: PropTypes.bool
};

export default MovieCardWrap;
