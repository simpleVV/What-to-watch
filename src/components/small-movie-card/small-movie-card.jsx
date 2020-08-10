import React from 'react';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';

import withVideo from '../../hocs/with-video/with-video.js';
import VideoPlayer from '../video-player/video-player.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieCardEnterHandler = this._onMovieCardEnterHandler.bind(this);
    this._onMovieCardLeaveHandler = this._onMovieCardLeaveHandler.bind(this);
  }

  render() {
    const {
      movie,
      onTitleClick,
      activeItem,
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
          isPlaying = {activeItem === movie}
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
    const {
      movie,
      onItemActivate
    } = this.props;

    this._videoTimeOut = setTimeout(() => onItemActivate(movie), this.props.startTimeOut);
  }

  _onMovieCardLeaveHandler() {
    const {onItemDisable} = this.props;

    onItemDisable();
    clearInterval(this._videoTimeOut);
  }
}

SmallMovieCard.defaultProps = {
  startTimeOut: 1000,
  muted: true,
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: VideoPlayer.propTypes.preview
      }
  ),
  activeItem: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: VideoPlayer.propTypes.preview
      }
  ),
  onTitleClick: PropTypes.func.isRequired,
  onItemActivate: PropTypes.func.isRequired,
  onItemDisable: PropTypes.func.isRequired,
  startTimeOut: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
