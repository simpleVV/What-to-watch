import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const App = (props) => {
  const {movies} = props;

  const getCurrentScreen = (films) => {
    switch (location.pathname) {
      case `/`:
        return (
          <MainScreen
            movies = {films}
          />
        );
      case `/films`:
        const id = location.hash.slice(1);
        const currentFilm = films.find((film) => film.id === id);
        return (
          <MoviePage
            movie = {currentFilm}
          />
        );
    }
    return null;
  };

  return getCurrentScreen(movies);
};

App.propTypes = {
  movies: MainScreen.propTypes.movies
};

export default App;
