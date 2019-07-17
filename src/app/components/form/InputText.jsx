import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Field } from 'formik';
import { createStyles, withStyles } from '~/utils/helpers';

const InputText = ({
  type,
  field: { value, name },
  form: { handleChange, handleBlur, handleFocus, errors = {} },
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    onBlur={handleBlur}
    onFocus={handleFocus}
    onChange={handleChange}
    value={value}
    variant="outlined"
    type={type}
    error={!!errors[name]}
    helperText={errors[name] || ' '}
    {...(errors[name] ? { test: errors[name] } : {})}
  />
);

InputText.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  form: PropTypes.shape({
    errors: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleFocus: PropTypes.func,
  }),
  type: PropTypes.string,
};

InputText.defaultProps = {
  field: {},
  form: {},
  type: 'text',
};

const styles = ({ spacing }) =>
  createStyles({
    root: {
      margin: [[spacing(1), 0]],
    },
  });

export default props => (
  <Field {...props} component={withStyles(styles)(InputText)} />
);
