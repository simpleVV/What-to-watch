import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCardTemplate extends PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeout = null;
    this.state = {
      isPlaying: false
    };
    this._movieCardEnterHandler = this._movieCardEnterHandler.bind(this);
    this._movieCardLeaveHandler = this._movieCardLeaveHandler.bind(this);
  }

  render() {
    const {
      movie,
      onTitleClick
    } = this.props;

    const {
      id,
      title,
      image,
      preview
    } = movie;

    const {isPlaying} = this.state;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => this._movieCardEnterHandler()}
      onMouseLeave={() => this._movieCardLeaveHandler()}>
      <VideoPlayer
        preview = {preview}
        poster = {image}
        isPlaying = {isPlaying}
      />
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href={`/films#${id}`}>{title}</a>
      </h3>
    </article>;
  }

  _movieCardEnterHandler(evt) {
    const {movie} = this.props;
    const {isPlaying} = this.state;

    this.props.onMovieCardEnter(movie, evt);
    this.setState({isPlaying: !isPlaying});
  }

  _movieCardLeaveHandler(evt) {
    const {isPlaying} = this.state;

    this.props.onMovieCardLeave(evt);
    this.setState({isPlaying: !isPlaying});

  }
}

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
  onMovieCardLeave: PropTypes.func
};

export default MovieCardTemplate;
