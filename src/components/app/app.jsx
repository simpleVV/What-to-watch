import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import VideoPlayerPage from '../video-player-page/video-player-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredMovies = this.props.filteredMovies;

    return this._getCurrentScreen(filteredMovies);
  }

  _getCurrentScreen(moviesList) {
    const {
      filteredMovies,
    } = this.props;

    const id = location.hash.slice(1);
    const currentFilm = id ? moviesList.find((movie) => movie.id === id) : filteredMovies[0];
    const similarFilms = moviesList.filter((movie) => movie.genre === currentFilm.genre);

    switch (location.pathname) {
      case `/`:
        return (
          <MainScreen
            movies = {filteredMovies}
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
  filteredMovies: MainScreen.propTypes.movies,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filteredMovies: state.filteredMovies,
});

export {App};
export default connect(mapStateToProps)(App);
