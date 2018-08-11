import React, { Component } from 'react';

import SurveyNewForm from './forms/SurveyNewForm';
import SurveyConfirmationForm from './forms/SurveyConfirmationForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <SurveyNewForm />
        <SurveyConfirmationForm />
      </div>
    );
  }
}

export default SurveyNew;
