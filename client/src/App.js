import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions';
import Header from './components/Header';
import Landing from './components/Landing';
import SurveyNew from './components/SurveyNew';
import Dashboard from './components/Dashboard';
import Thanks from './components/Thanks';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <Route location={location} path="/" exact component={Landing} />
          <Route
            location={location}
            path="/surveys"
            exact
            component={Dashboard}
          />
          <Route
            location={location}
            path="/surveys/new"
            exact
            component={SurveyNew}
          />
          <Route location={location} path="/thanks" exact component={Thanks} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
