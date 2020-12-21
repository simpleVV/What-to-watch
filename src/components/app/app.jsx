import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  getSelectedFilm,
  getIsFilmPlay
} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user-action-creator.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import VideoPlayerPage from '../video-player-page/video-player-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';

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

  _renderSignInScreen() {
    const {login} = this.props;
    return (
      <SignIn
        login = {login}
      />
    );
  }

  _renderMoviePage(film) {
    return (
      <MoviePage
        film= {film}
      />
    );
  }

  _renderVideoPlayerPage(film) {
    return (
      <VideoPlayerPage
        film = {film}
      />
    );
  }

  _renderApp() {
    const {
      selectedFilm,
      isFilmPlay,
      authorizationStatus,
    } = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return this._renderSignInScreen();
    }

    if (isFilmPlay) {
      return this._renderVideoPlayerPage(selectedFilm);
    }

    if (selectedFilm) {
      return this._renderMoviePage(selectedFilm);
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
  isFilmPlay: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  selectedFilm: getSelectedFilm(state),
  isFilmPlay: getIsFilmPlay(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(UserOperation.login(userData))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
