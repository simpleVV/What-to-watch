import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    // this._formRef = React.createRef();
    this._loginRef = React.createRef();
    this._passwordRef = React.createRef();
    this._submitHandler = this._submitHandler.bind(this);
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            className="sign-in__form"
            action="#"
            // ref = {this._formRef}
            onSubmit = {(evt) => {
              evt.preventDefault();
              this._submitHandler();
            }}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref = {this._loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref = {this._passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>Â© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }

  _submitHandler() {
    const {login} = this.props;

    const userData = {
      email: this._loginRef.current.value,
      password: this._passwordRef.current.value
    };

    login(userData);
  }
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired
};

export default SignIn;
