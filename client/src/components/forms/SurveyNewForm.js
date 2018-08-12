import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import FormField from './FormField';
import fields from './fields';
import { validateEmails } from '../../helpers/emailValidators';

const renderFields = () =>
  fields.map(({ label, name }) => {
    return (
      <Field
        key={name}
        type="text"
        label={label}
        name={name}
        component={FormField}
      />
    );
  });

let SurveyNewForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      {renderFields()}
      <div className="row">
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </div>
    </form>
  </div>
);

const validate = values => {
  const errors = {};

  if (values.recipients) {
    const invalidEmails = validateEmails(values.recipients || '');
    if (invalidEmails.length) {
      errors.recipients = `These emails are invalid: ${invalidEmails}`;
    }
  }

  fields.forEach(({ label, name }) => {
    if (!values[name]) {
      errors[name] = `${label} is required`;
    }
  });

  return errors;
};

SurveyNewForm = reduxForm({
  form: 'survey',
  destroyOnUnmount: false,
  validate
})(SurveyNewForm);
export default SurveyNewForm;
