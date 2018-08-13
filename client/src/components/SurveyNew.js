import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';
import SurveyNewForm from './forms/SurveyNewForm';
import SurveyConfirmationForm from './forms/SurveyConfirmationForm';

class SurveyNew extends Component {
  state = { page: 1 };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  submitForm = values => {
    const { createSurvey, history } = this.props;
    createSurvey(values, history);
  };

  render() {
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <SurveyNewForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <SurveyConfirmationForm
            onBack={this.prevPage}
            onSubmit={this.submitForm}
          />
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { createSurvey: actions.createSurvey }
)(
  reduxForm({
    form: 'survey'
  })(withRouter(SurveyNew))
);
