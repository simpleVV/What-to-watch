import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/action-creator.js';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import VideoPlayerPage from '../video-player-page/video-player-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const fullMovieList = this.props.fullMovieList;

    return this._getCurrentScreen(fullMovieList);
  }

  _getCurrentScreen(moviesList) {
    const {
      allGenres,
      filteredMovies,
      moviesPerPage,
      onFilterItemClick,
      onShowMoreButtonClick
    } = this.props;

    const id = location.hash.slice(1);
    const currentFilm = id ? moviesList.find((movie) => movie.id === id) : filteredMovies[0];
    const similarFilms = moviesList.filter((movie) => movie.genre === currentFilm.genre);

    switch (location.pathname) {
      case `/`:
        return (
          <MainScreen
            movies = {filteredMovies}
            allGenres = {allGenres}
            moviesPerPage = {moviesPerPage}
            onGenreClick = {(genre) => onFilterItemClick(
                genre,
                moviesList
            )}
            onShowMoreButtonClick = {() => onShowMoreButtonClick(moviesPerPage, moviesList.length)}
          />
        );
      case `/films`:
        return (
          <MoviePage
            movie = {currentFilm}
            similarMovies = {similarFilms}
          />
        );
      case `/player`:
        return (
          <VideoPlayerPage
            movie = {currentFilm}
            isPlaying = {true}
          />
        );
    }
    return null;
  }
}

App.propTypes = {
  allGenres: MainScreen.propTypes.allGenres,
  fullMovieList: MainScreen.propTypes.movies,
  filteredMovies: MainScreen.propTypes.movies,
  moviesPerPage: MainScreen.propTypes.moviesPerPage,
  onFilterItemClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: MainScreen.propTypes.onShowMoreButtonClick
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allGenres: state.allGenres,
  fullMovieList: state.fullMovieList,
  filteredMovies: state.filteredMovies,
  moviesPerPage: state.moviesPerPage
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (genre, movieList) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMovies(genre, movieList));
  },
  onShowMoreButtonClick: (currentMovies, allMovies) => {
    dispatch(ActionCreator.showMoreMovies(currentMovies, allMovies));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
