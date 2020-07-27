import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

const MovieReviews = (props) => {
  const {
    id,
    reviews
  } = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => {
          return (
            <Review key = {review.author + id}
              review = {review}
            />
          );
        })}
      </div>
      <div className="movie-card__reviews-col">

      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
      Review.propTypes.review
  ).isRequired
};

export default MovieReviews;
