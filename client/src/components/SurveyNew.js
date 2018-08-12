import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyNewForm from './forms/SurveyNewForm';
import SurveyConfirmationForm from './forms/SurveyConfirmationForm';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  nextPage = () => {
    this.setState({
      ...this.state,
      page: this.state.page + 1
    });
  };

  prevPage = () => {
    this.setState({
      ...this.state,
      page: this.state.page - 1
    });
  };

  submitForm = values => {
    console.log(values);
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

export default reduxForm({
  form: 'survey'
})(SurveyNew);
