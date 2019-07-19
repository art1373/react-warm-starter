import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { withSnackBar } from 'material-snackbar-supplier';
import { withStyles, createStyles } from '~/utils/helpers';
import {
  Form,
  InputText,
  FormButton,
  Grid,
  Typography,
} from '~/app/components';
import { RegisterSchema } from '~/utils/validations';
import { sendRegisterData } from '~/redux/actions';

const Register = ({
  showSnackBar,
  classes,
  submitRegister,
  error,
  errorMessage,
}) => {
  useEffect(
    () =>
      error &&
      showSnackBar({
        message: errorMessage || 'Something is wrong',
        variant: 'error',
      }),
    [error]
  );
  return (
    <>
      <Helmet title="login" />
      <Grid container className={classes.container}>
        <Form
          initialValues={{
            email: '',
            password: '',
            username: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={submitRegister}
          // onSuccess={console.log}
          // onFailure={console.log}
          className={classes.form}
        >
          <Grid className={classes.inputWrapper}>
            <Typography
              variant="h4"
              align="center"
              className={classes.typography}
            >
              REGISTER
            </Typography>
            <InputText name="username" label="Username" type="text" />
            <InputText
              name="email"
              label="Email"
              placeholder="email@example.com"
              type="email"
            />
            <InputText name="password" label="Password" type="password" />
          </Grid>
          <Grid className={classes.buttonWrapper}>
            <FormButton type="submit" label="register" />
            <FormButton type="reset" label="reset" variant="filled" />
          </Grid>
        </Form>
      </Grid>
    </>
  );
};

Register.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  showSnackBar: PropTypes.func.isRequired,
};

const styles = ({ palette, spacing, shape, shadows }) =>
  createStyles({
    buttonWrapper: {
      justifyContent: 'space-between',
      marginTop: spacing(5),
    },
    container: {
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
    },
    form: {
      backgroundColor: palette.grey[100],
      borderRadius: shape.borderRadius,
      boxShadow: shadows[2],
      padding: spacing(2),
    },
    inputWrapper: {
      flexDirection: 'column',
      minHeight: spacing(20),
      width: spacing(50),
    },
    typography: {
      margin: [[spacing(4), 0]],
    },
  });

export default compose(
  memo,
  connect(
    ({ register: { error, errorMessage } = {} } = {}) => ({
      error,
      errorMessage,
    }),
    dispatch => ({ submitRegister: user => dispatch(sendRegisterData(user)) })
  ),
  withSnackBar,
  withStyles(styles)
)(Register);
