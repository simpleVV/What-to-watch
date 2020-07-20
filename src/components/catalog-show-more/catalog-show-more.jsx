import React from 'react';
import PropTypes from 'prop-types';

const CatalogShowMore = (props) => {
  const {
    onShowMoreButtonClick,
    maxMoviesPerPage
  } = props;

  return (
    <div className="catalog__more">
      <button
        className={`catalog__button ${maxMoviesPerPage ? `visually-hidden` : ``}`}
        type="button"
        onClick={onShowMoreButtonClick}
      >
        Show more
      </button>
    </div>
  );
};

CatalogShowMore.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  maxMoviesPerPage: PropTypes.bool
};

export default CatalogShowMore;
