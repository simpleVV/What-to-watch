import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {children} = props;

  return (
    <header className="page-header movie-card__head">
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Header;
