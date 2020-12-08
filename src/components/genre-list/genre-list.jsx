import React from 'react';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';

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
      onGenreClick,
    } = this.props;

    return (genre === currentGenre) ? null : onGenreClick(genre);
  }
}


GenreList.propTypes = {
  allGenres: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  activeItem: PropTypes.string,
  onGenreClick: PropTypes.func.isRequired,
  onItemActivate: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default GenreList;
