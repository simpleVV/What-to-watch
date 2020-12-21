import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserInfo} from '../../reducer/user/selectors.js';

const Header = (props) => {
  const {
    children,
    userInfo
  } = props;

  return (
    <header className="page-header movie-card__head">
      {children}
      <div className="user-block">
        {
          (userInfo === null) ?
            <a href="sign-in.html" className="user-block__link">Sign in</a>
            :
            <div className="user-block__avatar">
              <img
                src={`https://htmlacademy-react-3.appspot.com/${userInfo.avatar_url}`}
                alt="User avatar"
                width="63"
                height="63"/>
            </div>
        }
      </div>

    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  userInfo: PropTypes.shape(
      {
        'id': PropTypes.number.isRequired,
        'email': PropTypes.string.isRequired,
        'name': PropTypes.string.isRequired,
        'avatar_url': PropTypes.string.isRequired
      }
  )
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  userInfo: getUserInfo(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
