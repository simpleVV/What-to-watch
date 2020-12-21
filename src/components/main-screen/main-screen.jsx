import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator as AppStateActionCreator} from '../../reducer/app-state/state-action-creator.js';
import {getPromoFilm} from '../../reducer/data/selectors.js';

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
    onPlayButtonClick,
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

          <GenreListWrapped/>

          <MovieList/>

          <CatalogShowMore/>
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
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick: (film) => {
    dispatch(AppStateActionCreator.selectFilm(film));
    dispatch(AppStateActionCreator.playFilm(true));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
