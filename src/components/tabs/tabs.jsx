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

    this.state = {
      tabName: `Overview`,
    };
    this._tabClickHandler = this._tabClickHandler.bind(this);
  }

  render() {
    const {tabName} = this.state;
    const {
      id,
      genre,
      details,
      reviews
    } = this.props;

    const tabs = [`Overview`, `Details`, `Reviews`];

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, index) => {
              return (
                <li
                  className={tabName === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}
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

        {Tabs.getCurrentTab(tabName, id, genre, details, reviews)}

      </div>
    );
  }

  _tabClickHandler(evt) {
    evt.preventDefault();
    this.props.onTabClick();
    this.setState({
      tabName: evt.target.textContent
    });
  }
}

Tabs.propTypes = {
  id: PropTypes.string,
  genre: PropTypes.oneOf([`Crime`, `Comedies`, `Dramas`, `Thrillers`]),
  details: MovieOverview.propTypes.details,
  reviews: MovieReviews.propTypes.reviews,
  onTabClick: PropTypes.func
};

export default Tabs;
