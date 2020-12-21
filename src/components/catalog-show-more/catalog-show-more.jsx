import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator as AppStateActionCreator} from '../../reducer/app-state/state-action-creator.js';
import {
  getFilmsPerPage,
  getIsMaxNumberFilms,
  getNumberAllFilms
} from '../../reducer/app-state/selectors.js';


const CatalogShowMore = (props) => {
  const {
    onShowMoreButtonClick,
    numberAllFilms,
    isMaxNumberFilms,
    filmsPerPage
  } = props;

  return (
    <div className="catalog__more">
      <button
        className={`catalog__button ${isMaxNumberFilms ? `visually-hidden` : ``}`}
        type="button"
        onClick={() =>{
          onShowMoreButtonClick(filmsPerPage, numberAllFilms);
        }}
      >
        Show more
      </button>
    </div>
  );
};

CatalogShowMore.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  isMaxNumberFilms: PropTypes.bool.isRequired,
  filmsPerPage: PropTypes.number.isRequired,
  numberAllFilms: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  numberAllFilms: getNumberAllFilms(state),
  filmsPerPage: getFilmsPerPage(state),
  isMaxNumberFilms: getIsMaxNumberFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick: (currentFilms, allFilms) => {
    dispatch(AppStateActionCreator.showMoreFilms(currentFilms, allFilms));
  }
});

export {CatalogShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogShowMore);
