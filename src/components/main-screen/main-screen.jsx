import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/state-action-creator.js';
import {
  getAllGenres,
  getCurrentGenre,
  getFilmsPerPage,
  getFilteredFilms,
  getIsMaxFilmNumber
} from '../../reducer/app-state/selectors.js';
import {
  getFilms,
  getPromoFilm
} from '../../reducer/data/selectors.js';

import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import CatalogShowMore from '../catalog-show-more/catalog-show-more.jsx';

const GenreListWrapped = withActiveItem(GenreList);

const MainScreen = (props) => {
  const {
    promoFilm,
    allGenres,
    filteredFilms,
    fullFilmList,
    onShowMoreButtonClick,
    onMovieCardClick,
    onPlayButtonClick,
    filmsPerPage,
    onFilterItemClick,
    currentGenre,
    isMaxFilmNumber
  } = props;

  const {
    title,
    genre,
  } = promoFilm;

  const {
    bigPoster,
    poster,
    releaseDate
  } = promoFilm.details;

  const currentFilms = [...filteredFilms];
  currentFilms.length = filmsPerPage;

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
                onPlayButtonClick = {
                  () => onPlayButtonClick(promoFilm)
                }
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreListWrapped
            allGenres = {allGenres}
            currentGenre = {currentGenre}
            onGenreClick = {onFilterItemClick}
          />
          <MovieList
            films = {currentFilms}
            onMovieCardClick = {onMovieCardClick}
          />

          <CatalogShowMore
            maxFilmsPerPage = {isMaxFilmNumber}
            onShowMoreButtonClick={() => onShowMoreButtonClick(filmsPerPage, fullFilmList.length)}
          />
        </section>

        <PageFooter/>

      </div>
    </main>
  );
};

MainScreen.propTypes = {
  promoFilm: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        details: PropTypes.shape(
            {
              bigPoster: PropTypes.string.isRequired,
              poster: PropTypes.string.isRequired,
              releaseDate: PropTypes.number.isRequired
            })
      }
  ),
  onPlayButtonClick: MovieCardButtons.propTypes.onPlayButtonClick,
  onMovieCardClick: MovieList.propTypes.onMovieCardClick,
  allGenres: GenreList.propTypes.allGenres,
  filteredFilms: MovieList.propTypes.films,
  fullFilmList: MovieList.propTypes.films,
  onShowMoreButtonClick: CatalogShowMore.propTypes.onShowMoreButtonClick,
  filmsPerPage: PropTypes.number.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
  currentGenre: GenreList.propTypes.currentGenre,
  isMaxFilmNumber: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  promoFilm: getPromoFilm(state),
  fullFilmList: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  allGenres: getAllGenres(state),
  currentGenre: getCurrentGenre(state),
  filmsPerPage: getFilmsPerPage(state),
  isMaxFilmNumber: getIsMaxFilmNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onShowMoreButtonClick: (currentFilms, allFilms) => {
    dispatch(ActionCreator.showMoreFilms(currentFilms, allFilms));
  },
  onMovieCardClick: (film) => {
    dispatch(ActionCreator.selectFilm(film));
    dispatch(ActionCreator.changeGenre(film.genre));
  },
  onPlayButtonClick: (film) => {
    dispatch(ActionCreator.selectFilm(film));
    dispatch(ActionCreator.playFilm(true));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
