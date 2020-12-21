import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSimilarFilms} from '../../reducer/app-state/selectors.js';
// import {ActionCreator as AppStateActionCreator} from '../../reducer/app-state/state-action-creator.js';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const SmallMovieCardWrapped = withActiveItem(SmallMovieCard);

const MovieList = (props) => {
  const {
    films,
  } = props;

  return <div className="catalog__movies-list">
    {films.map((film) =>
      <SmallMovieCardWrapped
        key = {film.id}
        film = {film}
      />)}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            preview: PropTypes.preview
          }
      )
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getSimilarFilms(state)
});

export {MovieList};
export default connect(mapStateToProps)(MovieList);
