import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import fields from './fields';

const renderFields = values => {
  return fields.map(({ label, name }) => {
    return (
      <div key={name} className="row">
        <div className="col s12">
          <label>{label}</label>
          <div>{values[name]}</div>
        </div>
      </div>
    );
  });
};

let SurveyConfirmationForm = ({ handleSubmit, onBack, formValues }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderFields(formValues)}
        <div className="row">
          <button
            type="button"
            onClick={onBack}
            className="red btn-flat white-text"
          >
            Back
          </button>
          <button type="submit" className="teal btn-flat right white-text">
            Confirm
            <i className="material-icons right">done</i>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues('survey')(state)
  };
};

SurveyConfirmationForm = reduxForm({
  form: 'survey',
  destroyOnUnmount: false
})(SurveyConfirmationForm);

export default connect(
  mapStateToProps,
  null
)(SurveyConfirmationForm);
