import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/action-creator.js';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import CatalogShowMore from '../catalog-show-more/catalog-show-more.jsx';

const GenreListWrapped = withActiveItem(GenreList);

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this._onGenreClickHandler = this._onGenreClickHandler.bind(this);
  }

  render() {
    const {
      allGenres,
      moviesPerPage,
      filteredMovies,
      fullMovieList,
      onShowMoreButtonClick
    } = this.props;

    const currentMovies = [...filteredMovies];
    currentMovies.length = moviesPerPage;

    const isMaxMoviesPerPage = (moviesPerPage >= filteredMovies.length) ? true :
      false;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreListWrapped
          allGenres = {allGenres}
          onGenreClick = {(genre) => this._onGenreClickHandler(genre)}
        />
        <MovieList
          movies = {currentMovies}
        />

        <CatalogShowMore
          maxMoviesPerPage = {isMaxMoviesPerPage}
          onShowMoreButtonClick={() => onShowMoreButtonClick(moviesPerPage, fullMovieList.length)}
        />
      </section>
    );
  }

  _onGenreClickHandler(genre) {
    const {
      currentGenre,
      onFilterItemClick,
      fullMovieList
    } = this.props;

    return (genre === currentGenre) ? null : onFilterItemClick(genre, fullMovieList);
  }
}

Catalog.propTypes = {
  filteredMovies: MovieList.propTypes.movies,
  fullMovieList: MovieList.propTypes.movies,
  allGenres: PropTypes.arrayOf(
      PropTypes.oneOf([`All genres`, `Crime`, `Comedies`, `Dramas`, `Thrillers`, `Horror`])
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  onShowMoreButtonClick: CatalogShowMore.propTypes.onShowMoreButtonClick
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allGenres: state.allGenres,
  fullMovieList: state.fullMovieList,
  filteredMovies: state.filteredMovies,
  currentGenre: state.currentGenre,
  moviesPerPage: state.moviesPerPage
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (genre, movieList) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMovies(genre, movieList));
  },
  onShowMoreButtonClick: (currentMovies, allMovies) => {
    dispatch(ActionCreator.showMoreMovies(currentMovies, allMovies));
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
