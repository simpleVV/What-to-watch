import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {
    allGenres,
    currentGenre,
    onGenreClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => {
        return (
          <li
            className={(currentGenre === genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            key={genre}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genre);
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
  ),
  currentGenre: PropTypes.oneOf([`All genres`, `Crime`, `Comedies`, `Dramas`, `Thrillers`, `Horror`]),
  onGenreClick: PropTypes.func.isRequired
};

export default GenreList;
