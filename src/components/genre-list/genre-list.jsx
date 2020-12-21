import React from 'react';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator as AppStateActionCreator} from '../../reducer/app-state/state-action-creator.js';
import {
  getAllGenres,
  getCurrentGenre
} from '../../reducer/app-state/selectors.js';

class GenreList extends PureComponent {
  constructor(props) {
    super(props);

    this._genreClickHandler = this._genreClickHandler.bind(this);
  }

  render() {
    const {
      allGenres,
      activeItem,
      onItemActivate
    } = this.props;

    const activeGenre = (activeItem) ? activeItem : `All genres`;

    return (
      <ul className="catalog__genres-list">
        {allGenres.map((genre) => {
          return (
            <li
              className={`catalog__genres-item ${(activeGenre === genre) ? `catalog__genres-item--active` : ``}`}
              key={genre}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onItemActivate(genre);
                  this._genreClickHandler(genre);
                }}
              >{genre}</a>
            </li>
          );
        })}
      </ul>
    );
  }

  _genreClickHandler(genre) {
    const {
      currentGenre,
      onFilterItemClick,
    } = this.props;

    return (genre === currentGenre) ? null : onFilterItemClick(genre);
  }
}


GenreList.propTypes = {
  allGenres: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  activeItem: PropTypes.string,
  onFilterItemClick: PropTypes.func.isRequired,
  onItemActivate: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allGenres: getAllGenres(state),
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (genre) => {
    dispatch(AppStateActionCreator.changeGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
