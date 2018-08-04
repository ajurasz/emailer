import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurwayNew = () => <h2>SurwayNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Route path="/" exact component={Landing} />
          <Route path="/surways" exact component={Dashboard} />
          <Route path="/surways/new" exact component={SurwayNew} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
