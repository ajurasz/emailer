import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  componentDidMount() {}

  renderMenu = () => {
    const { loaded, loading, user } = this.props;

    if (loaded && !loading && !!user) {
      // authenticted user
      return (
        <li>
          <a href="/auth/google">Logout</a>
        </li>
      );
    } else if (loaded && !loading && !user) {
      // anonymous
      return (
        <li>
          <a href="/auth/google">Sign in with google</a>
        </li>
      );
    } else {
      // waiting for api call to complete
      return;
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Emailer
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderMenu()}
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

export default connect(
  mapStateToProps,
  actions
)(Header);
