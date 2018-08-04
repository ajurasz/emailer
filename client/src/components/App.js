import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveysNew</h2>;

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
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
