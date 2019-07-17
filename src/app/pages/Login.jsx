import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
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
import { LoginSchema } from '~/utils/validations';

const Login = ({ showSnackBar, classes }) => (
  <>
    <Helmet title="login" />
    <Grid container className={classes.container}>
      <Form
        initialValues={{
          password: '',
          username: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={console.log}
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
            LOGIN
          </Typography>
          <InputText
            name="username"
            label="Email"
            placeholder="email@example.com"
            type="email"
          />
          <InputText name="password" label="Password" type="password" />
        </Grid>
        <Grid className={classes.buttonWrapper}>
          <FormButton type="submit" label="login" />
          <FormButton type="reset" label="reset" variant="filled" />
        </Grid>
      </Form>
    </Grid>
  </>
);

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  showSnackBar: PropTypes.func.isRequired,
};

const styles = ({ palette, spacing }) =>
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
  withSnackBar,
  withStyles(styles)
)(Login);
