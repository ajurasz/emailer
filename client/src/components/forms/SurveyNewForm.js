import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from './FormField';
import fields from './fields';

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

let SurveyNewForm = () => <div>{renderFields()}</div>;

const validate = values => {
  const errors = {};
  fields.forEach(({ label, name }) => {
    if (!values[name]) {
      errors[name] = `${label} is required`;
    }
  });

  return errors;
};

SurveyNewForm = reduxForm({
  form: 'survey',
  validate
})(SurveyNewForm);
export default SurveyNewForm;
