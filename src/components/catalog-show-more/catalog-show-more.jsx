import React from 'react';
import PropTypes from 'prop-types';

const CatalogShowMore = (props) => {
  const {
    onShowMoreButtonClick,
    maxFilmsPerPage
  } = props;

  return (
    <div className="catalog__more">
      <button
        className={`catalog__button ${maxFilmsPerPage ? `visually-hidden` : ``}`}
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
  maxFilmsPerPage: PropTypes.bool.isRequired
};

export default CatalogShowMore;
