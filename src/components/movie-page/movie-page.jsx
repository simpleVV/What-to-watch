import React from 'react';
import PropTypes from 'prop-types';
import {Fragment} from 'react';

import Tabs from '../tabs/tabs.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import MovieCardBg from '../movie-card-bg/movie-card-bg.jsx';
import MovieCardDesc from '../movie-card-desc/movie-card-desc.jsx';
import MovieCardInfo from '../movie-card-info/movie-card-info.jsx';
import MovieCardWrap from '../movie-card-wrap/movie-card-wrap.jsx';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const TabsWrapped = withActiveItem(Tabs);
const MovieListWrapped = withActiveItem(MovieList);

const MoviePage = (props) => {
  const {
    similarMovies,
    movie
  } = props;
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

  return (
    <Fragment>
      <MovieCard
        isMoviePage = {true}
      >
        <div className="movie-card__hero">
          <MovieCardBg
            bigPoster = {bigPoster}
            title = {title}
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <Logo/>
          </Header>

          <MovieCardWrap>
            <MovieCardDesc
              title = {title}
              genre = {genre}
              releaseDate = {releaseDate}
            >
              <MovieCardButtons
                isMoviePage = {true}
              />
            </MovieCardDesc>
          </MovieCardWrap>
        </div>


        <MovieCardWrap
          isTranslateTop = {true}
        >
          <MovieCardInfo
            title = {title}
            poster = {poster}
            isMoviePage = {true}
          >
            <TabsWrapped
              id = {id}
              genre = {genre}
              details = {details}
              reviews = {reviews}
            />
          </MovieCardInfo>
        </MovieCardWrap>
      </MovieCard>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieListWrapped
            movies = {similarMovies}
          />

        </section>

        <PageFooter/>

      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  similarMovies: MovieList.propTypes.movies,
  movie: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        genre: MovieCardDesc.genre,
        title: MovieCardDesc.title,
        details: PropTypes.shape(
            {
              releaseDate: MovieCardDesc.releaseDate,
              bigPoster: MovieCardBg.bigPoster,
              poster: PropTypes.string.isRequired,
            }
        ),
        reviews: Tabs.propTypes.reviews
      }
  )
};

export default MoviePage;
