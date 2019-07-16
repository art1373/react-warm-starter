import React, { memo } from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { withSnackBar } from 'material-snackbar-supplier';
import { Form, InputText, FormButton } from '~/app/components';

const Login = props => (
  <div>
    <Helmet title="login" />
    <div>
      <Form
        initialValues={{
          password: '',
          username: '',
        }}
        onSubmit={console.log}
        onSuccess={console.log}
        onFailure={console.log}
      >
        <InputText name="username" />
        <InputText name="password" />
        <FormButton type="submit" label="submit" />
        <FormButton type="reset" label="reset" variant="filled" />
      </Form>
    </div>
  </div>
);

export default compose(
  memo,
  withSnackBar
)(Login);
