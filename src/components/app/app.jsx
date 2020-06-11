import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/action-creator.js';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

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
      currentGenre,
      filteredMovies,
      onFilterItemClick
    } = this.props;

    switch (location.pathname) {
      case `/`:
        return (
          <MainScreen
            movies = {filteredMovies}
            currentGenre = {currentGenre}
            allGenres = {allGenres}
            onGenreClick = {(genre) => onFilterItemClick(
                genre,
                moviesList
            )}
          />
        );
      case `/films`:
        const id = location.hash.slice(1);
        const currentFilm = moviesList.find((movie) => movie.id === id);
        const similarFilms = moviesList.filter((movie) => movie.genre === currentFilm.genre);
        return (
          <MoviePage
            movie = {currentFilm}
            similarMovies = {similarFilms}
          />
        );
    }
    return null;
  }
}

App.propTypes = {
  allGenres: MainScreen.propTypes.allGenres,
  onFilterItemClick: PropTypes.func.isRequired,
  currentGenre: MainScreen.propTypes.currentGenre,
  fullMovieList: MainScreen.propTypes.movies,
  filteredMovies: MainScreen.propTypes.movies
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentGenre: state.currentGenre,
  allGenres: state.allGenres,
  fullMovieList: state.fullMovieList,
  filteredMovies: state.filteredMovies
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (genre, movieList) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre(genre, movieList));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
