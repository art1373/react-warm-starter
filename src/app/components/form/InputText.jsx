import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Field } from 'formik';

const InputText = ({
  field: { value, name },
  form: { handleChange, handleBlur, handleFocus /* , errors */ },
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    onBlur={handleBlur}
    onFocus={handleFocus}
    onChange={handleChange}
    value={value}
    // test={console.log('--errors: ', errors)}
  />
);

InputText.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
  }).isRequired,
};

export default props => <Field {...props} component={InputText} />;
