import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  getSelectedFilm,
  getIsFilmPlay
} from '../../reducer/app-state/selectors.js';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import VideoPlayerPage from '../video-player-page/video-player-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return this._renderApp();
  }

  _renderMainScreen() {
    return (
      <MainScreen/>
    );
  }

  _renderMoviePage() {
    const {selectedFilm} = this.props;

    return (
      <MoviePage
        film= {selectedFilm}
      />
    );
  }

  _renderVideoPlayerPage() {
    const {
      selectedFilm
    } = this.props;
    return (
      <VideoPlayerPage
        film = {selectedFilm}
      />
    );
  }

  _renderApp() {
    const {
      selectedFilm,
      isFilmPlay
    } = this.props;

    if (isFilmPlay) {
      return this._renderVideoPlayerPage();
    }

    if (selectedFilm) {
      return this._renderMoviePage();
    }


    return this._renderMainScreen();
  }
}

App.propTypes = {
  selectedFilm: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        details: PropTypes.shape(
            {
              bigPoster: PropTypes.string.isRequired,
              poster: PropTypes.string.isRequired,
              releaseDate: PropTypes.number.isRequired
            })
      }
  ),
  isFilmPlay: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  selectedFilm: getSelectedFilm(state),
  isFilmPlay: getIsFilmPlay(state)
});

export {App};
export default connect(mapStateToProps)(App);
