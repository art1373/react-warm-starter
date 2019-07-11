import React, { memo } from 'react';
import Helmet from 'react-helmet';

const Login = () => (
  <div>
    <Helmet title="login" />
    <div>login page</div>
  </div>
);

export default memo(Login);
