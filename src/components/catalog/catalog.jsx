import React from 'react';

import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';

const Catalog = (props) => {
  const {
    allGenres,
    currentGenre,
    onGenreClick,
    movies
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList
        allGenres = {allGenres}
        currentGenre = {currentGenre}
        onGenreClick = {onGenreClick}
      />
      <MovieList
        movies = {movies}
      />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  movies: MovieList.propTypes.movies,
  allGenres: GenreList.propTypes.allGenres,
  currentGenre: GenreList.propTypes.currentGenre,
  onGenreClick: GenreList.propTypes.onGenreClick
};

export default Catalog;
