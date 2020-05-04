import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs.jsx';

const MoviePage = (props) => {
  const {movie} = props;
  const {
    id,
    genre,
    title,
    details,
    reviews
  } = movie;

  const {
    releaseDate,
    bigPoster,
    poster,
  } = details;

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={bigPoster} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={poster} alt={title} width="218" height="327" />
        </div>

        <Tabs
          id = {id}
          genre = {genre}
          details = {details}
          reviews = {reviews}
          onTabClick = {() => {}}
        />

      </div>
    </div>
  </section>;
};

MoviePage.propTypes = {
  movie: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]),
        title: PropTypes.string.isRequired,
        details: PropTypes.shape(
            {
              releaseDate: PropTypes.number,
              bigPoster: PropTypes.string,
              poster: PropTypes.string,
              description: PropTypes.string,
              ratingLevel: PropTypes.string,
              ratingScore: PropTypes.string,
              ratingCount: PropTypes.number,
              director: PropTypes.string,
              starring: PropTypes.arrayOf(PropTypes.string)
            }
        ),
        reviews: Tabs.propTypes.reviews
      }
  )
};

export default MoviePage;
