import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {moviesTitle} = props;

  return <MainScreen
    moviesTitle = {moviesTitle}
  />;
};

App.propTypes = {
  moviesTitle: PropTypes.arrayOf(PropTypes.string)
};

export default App;
