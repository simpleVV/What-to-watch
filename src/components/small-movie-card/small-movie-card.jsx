import React from 'react';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator as AppStateActionCreator} from '../../reducer/app-state/state-action-creator.js';

import withVideo from '../../hocs/with-video/with-video.js';
import SmallCardImage from '../small-card-image/small-card-image.jsx';

const SmallCardImageWrapped = withVideo(SmallCardImage);

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeOut = null;
    this._movieCardEnterHandler = this._movieCardEnterHandler.bind(this);
    this._movieCardLeaveHandler = this._movieCardLeaveHandler.bind(this);
    this._movieCardClickHandler = this._movieCardClickHandler.bind(this);
  }

  componentWillUnmount() {
    this._movieCardLeaveHandler();
  }

  render() {
    const {
      film,
      activeItem,
      muted
    } = this.props;

    const {
      title,
    } = film;

    return <article className="small-movie-card catalog__movies-card"
      onMouseEnter={this._movieCardEnterHandler}
      onMouseLeave={this._movieCardLeaveHandler}
      onClick={this._movieCardClickHandler}>

      <SmallCardImageWrapped
        preview = {film.preview}
        poster = {film.image}
        style = {{width: `100%`, height: `100%`, objectFit: `fill`}}
        muted = {muted}
        isPlaying = {film === activeItem}
      />

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href='movie-page.html'>
          {title}
        </a>
      </h3>
    </article>;
  }

  _movieCardEnterHandler() {
    const {
      film,
      onItemActivate
    } = this.props;

    this._videoTimeOut = setTimeout(() => onItemActivate(film), this.props.startTimeOut);
  }

  _movieCardLeaveHandler() {
    const {onItemDisable} = this.props;

    onItemDisable();
    clearInterval(this._videoTimeOut);
  }

  _movieCardClickHandler(evt) {
    const {
      film,
      onMovieCardClick
    } = this.props;

    evt.preventDefault();
    onMovieCardClick(film);
  }
}

SmallMovieCard.defaultProps = {
  startTimeOut: 1000,
  muted: true,
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.preview
      }
  ),
  activeItem: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }
  ),
  onMovieCardClick: PropTypes.func.isRequired,
  onItemActivate: PropTypes.func.isRequired,
  onItemDisable: PropTypes.func.isRequired,
  startTimeOut: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps);
const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick: (film) => {
    dispatch(AppStateActionCreator.selectFilm(film));
    dispatch(AppStateActionCreator.changeGenre(film.genre));
  }
});

export {SmallMovieCard};
export default connect(mapStateToProps, mapDispatchToProps)(SmallMovieCard);
