import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {review} = props;
  const {
    text,
    author,
    date,
    rating
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape(
      {
        text: PropTypes.string.isRequared,
        author: PropTypes.string.isRequared,
        date: PropTypes.string.isRequared,
        rating: PropTypes.string
      }
  )
};

export default Review;
