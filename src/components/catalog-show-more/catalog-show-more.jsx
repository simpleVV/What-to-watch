import React from 'react';
import PropTypes from 'prop-types';

const CatalogShowMore = (props) => {
  const {
    onShowMoreButtonClick,
    isMaxMoviesPerPage
  } = props;
  return (
    <div className="catalog__more">
      <button
        className={`catalog__button ${isMaxMoviesPerPage ? `visually-hidden` : ``}`}
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
  isMaxMoviesPerPage: PropTypes.bool
};

export default CatalogShowMore;
