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
  form: {
    dirty,
    isSubmitting,
    [submitButtonType[type]]: handleClick,
    errors = {},
  },
}) => {
  const isTypeSubmit = type === 'submit';

  return (
    <Button
      name={type}
      onClick={handleClick}
      disabled={
        !dirty ||
        isSubmitting ||
        (isTypeSubmit && Object.keys(errors).length > 0)
      }
      color="primary"
      variant={isTypeSubmit ? 'contained' : 'outlined'}
      href={undefined}
    >
      {label}
    </Button>
  );
};

FormButton.propTypes = {
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
    isSubmitting: PropTypes.bool,
  }),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset']),
};

FormButton.defaultProps = {
  form: {},
  type: 'submit',
};

export default props => <Field {...props} component={FormButton} />;
