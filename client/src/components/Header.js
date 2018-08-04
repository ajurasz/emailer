import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  renderMenu = ({ loaded, user }) => {
    if (loaded && !!user) {
      // authenticted user
      return (
        <li>
          <a href="/" onClick={this.logout}>
            Logout
          </a>
        </li>
      );
    } else {
      // anonymous
      return (
        <li>
          <a href="/auth/google">Sign in with google</a>
        </li>
      );
    }
  };

  render() {
    const { user } = this.props;

    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to={!!user ? '/surveys' : '/'} className="brand-logo">
            Emailer
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderMenu(this.props)}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    ...auth
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      logoutUser: actions.logoutUser
    }
  )(Header)
);
