import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {
    allGenres,
    onGenreClick,
    activeItem,
    onItemActivate
  } = props;

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
                onGenreClick(genre);
                onItemActivate(genre);
              }}
            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};


GenreList.propTypes = {
  allGenres: PropTypes.arrayOf(
      PropTypes.oneOf([`All genres`, `Crime`, `Comedies`, `Dramas`, `Thrillers`, `Horror`])
  ).isRequired,
  activeItem: PropTypes.oneOf([`All genres`, `Crime`, `Comedies`, `Dramas`, `Thrillers`, `Horror`]),
  onGenreClick: PropTypes.func.isRequired,
  onItemActivate: PropTypes.func.isRequired
};

export default GenreList;
