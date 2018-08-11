import React from 'react';
import { reduxForm } from 'redux-form';

let SurveyConfirmationForm = () => <div>SurveyConfirmationForm</div>;

SurveyConfirmationForm = reduxForm({
  form: 'survey'
})(SurveyConfirmationForm);
export default SurveyConfirmationForm;
