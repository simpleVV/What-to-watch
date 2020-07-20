import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

const MovieCardTemplate = (props) => {
  const {
    movie,
    onTitleClick,
    isPlaying,
    onMovieCardEnter,
    onMovieCardLeave
  } = props;

  const {
    id,
    title,
    image,
    preview
  } = movie;

  return <article className="small-movie-card catalog__movies-card"
    onMouseEnter={onMovieCardEnter}
    onMouseLeave={onMovieCardLeave}>
    <VideoPlayer
      preview = {preview}
      poster = {image}
      isPlaying = {isPlaying}
    />
    <h3 className="small-movie-card__title" onClick={onTitleClick}>
      <a className="small-movie-card__link" href={`/films#${id}`}>{title}</a>
    </h3>
  </article>;
};

MovieCardTemplate.propTypes = {
  movie: PropTypes.shape(
      {
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        preview: VideoPlayer.propTypes.preview
      }
  ),
  onTitleClick: PropTypes.func,
  onMovieCardEnter: PropTypes.func,
  onMovieCardLeave: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCardTemplate;
