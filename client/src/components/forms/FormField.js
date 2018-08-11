import React from 'react';

const FormField = ({ input, label, meta: { active, touched, error } }) => {
  const isFormActive = () => {
    return !!input.value || active;
  };

  const hasError = () => touched && error;

  const validateClass = () => {
    if (!touched) {
      return '';
    } else if (hasError()) {
      return 'invalid';
    } else {
      return 'valid';
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input {...input} className={'validate ' + validateClass()} />
        <label htmlFor={input.name} className={isFormActive() ? 'active' : ''}>
          {label}
        </label>
        {hasError() && <span className="helper-text" data-error={error} />}
      </div>
    </div>
  );
};

export default FormField;
