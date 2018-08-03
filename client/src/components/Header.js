import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Emailer
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Sign in with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
