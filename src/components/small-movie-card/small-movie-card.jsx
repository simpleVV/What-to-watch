import React from 'react';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';

import withVideo from '../../hocs/with-video/with-video.js';
import VideoPlayer from '../video-player/video-player.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);

class MovieCardTemplate extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieCardEnterHandler = this._onMovieCardEnterHandler.bind(this);
    this._onMovieCardLeaveHandler = this._onMovieCardLeaveHandler.bind(this);
  }

  render() {
    const {
      movie,
      onTitleClick,
      isPlaying,
      muted,
    } = this.props;

    const {
      id,
      title,
      image,
      preview
    } = movie;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={this._onMovieCardEnterHandler}
      onMouseLeave={this._onMovieCardLeaveHandler}>
      <div className="small-movie-card__image">
        <VideoPlayerWrapped
          preview = {preview}
          poster = {image}
          isPlaying = {isPlaying}
          muted = {muted}
          style = {{width: `100%`, height: `100%`, objectFit: `fill`}}
        />
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href={`/films#${id}`}>{title}</a>
      </h3>
    </article>;
  }

  _onMovieCardEnterHandler() {
    this._videoTimeOut = setTimeout(() => this.props.onMovieCardEnter(), this.props.startTimeOut);
  }

  _onMovieCardLeaveHandler() {
    this.props.onMovieCardLeave();
    clearInterval(this._videoTimeOut);
  }
}

MovieCardTemplate.defaultProps = {
  startTimeOut: 1000,
  muted: true,
};

MovieCardTemplate.propTypes = {
  movie: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: VideoPlayer.propTypes.preview
      }
  ),
  onTitleClick: PropTypes.func.isRequired,
  onMovieCardEnter: PropTypes.func.isRequired,
  onMovieCardLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  startTimeOut: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default MovieCardTemplate;
