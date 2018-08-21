import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ProgressBar from './ProgressBar';

class SurveysList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderCard(survey) {
    return (
      <div key={survey._id} className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On:{' '}
                {survey.sentAt
                  ? new Date(survey.sentAt).toLocaleDateString()
                  : '-'}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { surveys, loading } = this.props;
    console.log(surveys);
    return (
      <div>
        {loading && <ProgressBar />}
        {surveys.map(this.renderCard)}
      </div>
    );
  }
}

const mapStateToProps = ({ survey }) => ({
  surveys: survey.surveys,
  loading: survey.loading
});

export default connect(
  mapStateToProps,
  {
    fetchSurveys: actions.fetchSurveys
  }
)(SurveysList);
