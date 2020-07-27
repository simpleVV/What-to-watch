import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

class Tabs extends PureComponent {
  static getCurrentTab(tabName, id, genre, details, reviews) {
    switch (tabName) {
      case `Overview`:
        return (
          <MovieOverview
            details = {details}
          />
        );
      case `Details`:
        return (
          <MovieDetails
            id = {id}
            genre = {genre}
            details = {details}
          />
        );
      case `Reviews`:
        return (
          <MovieReviews
            id = {id}
            reviews = {reviews}
          />
        );
    }
    return null;
  }

  constructor(props) {
    super(props);

    this._tabClickHandler = this._tabClickHandler.bind(this);
  }

  render() {
    const {
      id,
      genre,
      details,
      reviews,
      activeItem
    } = this.props;

    const activeTab = (activeItem) ? activeItem : `Overview`;
    const tabs = [`Overview`, `Details`, `Reviews`];

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, index) => {
              return (
                <li
                  className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}
                  key={tab + index}
                >
                  <a href="#"
                    className="movie-nav__link"
                    onClick={this._tabClickHandler}>{tab}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        {Tabs.getCurrentTab(activeTab, id, genre, details, reviews)}

      </div>
    );
  }

  _tabClickHandler(evt) {
    const {onItemActivate} = this.props;
    evt.preventDefault();
    onItemActivate(evt.target.textContent);
  }
}

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]).isRequired,
  activeItem: PropTypes.oneOf([`Overview`, `Details`, `Reviews`]),
  details: MovieOverview.propTypes.details,
  reviews: MovieReviews.propTypes.reviews,
  onItemActivate: PropTypes.func.isRequired
};

export default Tabs;
