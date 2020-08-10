import React from 'react';

import Catalog from '../catalog/catalog.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import MovieCardBg from '../movie-card-bg/movie-card-bg.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';
import MovieCardInfo from '../movie-card-info/movie-card-info.jsx';
import MovieCardWrap from '../movie-card-wrap/movie-card-wrap.jsx';
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
  } = movies[0];

  const {
    bigPoster,
    poster,
    releaseDate
  } = movies[0].details;

  return (
    <main>
      <MovieCard
        isMoviePage = {false}
      >
        <MovieCardBg
          bigPoster = {bigPoster}
          title = {title}
        />
        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Logo/>
        </Header>

        <MovieCardWrap>
          <MovieCardInfo
            title = {title}
            poster = {poster}
          >
            <MovieCardDesc
              title = {title}
              genre = {genre}
              releaseDate = {releaseDate}
            >
              <MovieCardButtons/>
            </MovieCardDesc>
          </MovieCardInfo>
        </MovieCardWrap>
      </MovieCard>

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
