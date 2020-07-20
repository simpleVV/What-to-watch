import React from 'react';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import CatalogShowMore from '../catalog-show-more/catalog-show-more.jsx';

const GenreListWrapped = withActiveItem(GenreList);
const MovieListWrapped = withActiveItem(MovieList);

const Catalog = (props) => {
  const {
    allGenres,
    moviesPerPage,
    movies,
    onGenreClick,
    onShowMoreButtonClick,
  } = props;

  const currentMovies = [...movies];
  currentMovies.length = moviesPerPage;

  const isMaxMoviesPerPage = (moviesPerPage >= movies.length) ? true :
    false;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreListWrapped
        allGenres = {allGenres}
        onGenreClick = {onGenreClick}
      />
      <MovieListWrapped
        movies = {currentMovies}
      />

      <CatalogShowMore
        onShowMoreButtonClick={onShowMoreButtonClick}
        maxMoviesPerPage = {isMaxMoviesPerPage}
      />
    </section>
  );
};

Catalog.propTypes = {
  movies: MovieList.propTypes.movies,
  allGenres: GenreList.propTypes.allGenres,
  onGenreClick: GenreList.propTypes.onGenreClick,
  moviesPerPage: PropTypes.number,
  onShowMoreButtonClick: CatalogShowMore.propTypes.onShowMoreButtonClick
};

export default Catalog;
