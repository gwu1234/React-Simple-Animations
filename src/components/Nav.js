import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './styles.css';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header-nav">
            <Link className="header-nav__item" to="/">ReactAnimations</Link>
            <Link className="header-nav__item" to="/CssAnimations/">CssAnimations</Link>
          </div>
          <a href="https://github.com/gwu1234?tab=repositories" className="header__link">GitHub gwu1234</a>
        </header>
      </Fragment>
    );
  }
}

export default Nav;
