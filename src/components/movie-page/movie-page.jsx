import React from 'react';
import PropTypes from 'prop-types';
import {Fragment} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/state-action-creator.js';
import {getFilteredFilms} from '../../reducer/app-state/selectors.js';

import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const TabsWrapped = withActiveItem(Tabs);
const MovieListWrapped = withActiveItem(MovieList);

const MoviePage = (props) => {
  const {
    onMovieCardClick,
    onPlayButtonClick,
    filteredFilms,
    film
  } = props;

  const {
    id,
    genre,
    title,
    details,
    reviews
  } = film;
  const {
    releaseDate,
    bigPoster,
    poster,
  } = details;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bigPoster} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <Logo/>
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <MovieCardButtons
                onPlayButtonClick = {onPlayButtonClick}
                isMoviePage = {true}
              />
            </div>
          </div>

        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <TabsWrapped
              id = {id}
              genre = {genre}
              details = {details}
              reviews = {reviews}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieListWrapped
            films = {filteredFilms}
            onMovieCardClick = {onMovieCardClick}
          />

        </section>

        <PageFooter/>

      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  filteredFilms: MovieList.propTypes.films,
  onMovieCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: MovieCardButtons.propTypes.onPlayButtonClick,
  film: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.shape(
            {
              releaseDate: PropTypes.number.isRequired,
              bigPoster: PropTypes.string.isRequired,
              poster: PropTypes.string.isRequired,
            }
        ),
        reviews: Tabs.propTypes.reviews
      }
  )
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filteredFilms: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick: (film) => {
    dispatch(ActionCreator.selectFilm(film));
  },
  onPlayButtonClick: () => {
    dispatch(ActionCreator.playFilm(true));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
