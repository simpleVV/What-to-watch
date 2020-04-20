import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCardTemplate from '../small-movie-card/small-movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: null
    };
    this._getMovieInfo = this._getMovieInfo.bind(this);
    this._removeMovieInfo = this._removeMovieInfo.bind(this);
  }

  render() {
    const {movies} = this.props;

    return <div className="catalog__movies-list">
      {movies.map((movie, i) =>
        <MovieCardTemplate
          key = {movie.title + i}
          movie = {movie}
          onMovieCardEnter = {this._getMovieInfo}
          onMovieCardLeave = {this._removeMovieInfo}
          onTitleClick = {() => {}}
        />)}
    </div>;
  }

  _getMovieInfo(card) {
    this.setState({
      currentCard: card
    });
  }

  _removeMovieInfo() {
    this.setState({
      currentCard: null
    });
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      MovieCardTemplate.propTypes.movie
  ).isRequired
};

export default MovieList;
