import React from 'react';
import headerLogo from '../images/headerLogo.svg';
import { Route, Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип сайта" />
        <div className="site-entrance__link-container">
          <p className="site-entrance__email">{this.props.email}</p>
          <Route exact path='/'>
            <button
              className="site-entrance__logout-button"
              onClick={this.props.onLogoutClick}>
                Выйти
            </button>
          </Route>
          <Route path='/signup'>
            <Link
              className="site-entrance__redirect-link site-entrance__redirect-link_place_header"
              to='signin'>
                Войти
            </Link>
          </Route>
          <Route path='/signin'>
            <Link
              className="site-entrance__redirect-link site-entrance__redirect-link_place_header"
              to='signup'>
                Зарегистрироваться
            </Link>
          </Route>
        </div>
      </header>
    );
  }
}

export default withRouter(Header)