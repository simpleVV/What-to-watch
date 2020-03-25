import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';

const App = (props) => {
  const {movies} = props;

  return <MainScreen
    movies = {movies}
  />;
};

App.propTypes = {
  movies: MainScreen.propTypes.movies
};

export default App;
