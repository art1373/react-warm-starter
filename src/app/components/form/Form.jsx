import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';

const Form = ({ render, children, ...rest }) => (
  <Formik
    {...rest}
    render={props => <FormikForm {...props}>{children}</FormikForm>}
  />
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func,
  ]).isRequired,
  render: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func,
  ]),
};

Form.defaultProps = {
  render: undefined,
};

export default Form;
