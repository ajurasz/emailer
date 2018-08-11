import React from 'react';

const FormField = ({ input, label, meta }) => {
  const isFormActive = () => {
    return !!input.value || meta.active;
  };

  const hasError = () => meta.touched && meta.error;

  const validateClass = () => {
    if (!meta.touched) {
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
        {hasError() && <span className="helper-text" data-error={meta.error} />}
      </div>
    </div>
  );
};

export default FormField;
