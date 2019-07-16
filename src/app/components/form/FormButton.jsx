import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Button } from '@material-ui/core';

const submitButtonType = {
  reset: 'handleReset',
  submit: 'handleSubmit',
};

const FormButton = ({
  type,
  label,
  form: { dirty, isSubmitting, [submitButtonType[type]]: handleClick },
}) => (
  <Button
    name={type}
    onClick={handleClick}
    disabled={!dirty && !isSubmitting}
    href={undefined}
  >
    {label}
  </Button>
);

FormButton.propTypes = {
  form: PropTypes.shape({
    dirty: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    ...PropTypes.object,
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset']),
};

FormButton.defaultProps = {
  type: 'submit',
};

export default props => <Field {...props} component={FormButton} />;
