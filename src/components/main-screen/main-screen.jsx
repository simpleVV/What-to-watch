import React from 'react';

import Catalog from '../catalog/catalog.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

const MainScreen = (props) => {
  const {
    allGenres,
    onGenreClick,
    moviesPerPage,
    movies,
    onShowMoreButtonClick,
  } = props;

  const {
    title,
    genre,
    id
  } = movies[0];

  const {
    bigPoster,
    poster,
    releaseDate
  } = movies[0].details;

  return (
    <main>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={bigPoster} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Logo/>
        </Header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <MovieCardButtons
                id = {id}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          allGenres = {allGenres}
          onGenreClick = {onGenreClick}
          moviesPerPage = {moviesPerPage}
          movies = {movies}
          onShowMoreButtonClick={onShowMoreButtonClick}
        />

        <PageFooter/>

      </div>
    </main>
  );
};

MainScreen.propTypes = {
  movies: Catalog.propTypes.movies,
  moviesPerPage: Catalog.propTypes.moviesPerPage,
  allGenres: Catalog.propTypes.allGenres,
  onGenreClick: Catalog.propTypes.onGenreClick,
  onShowMoreButtonClick: Catalog.propTypes.onShowMoreButtonClick
};

export default MainScreen;
