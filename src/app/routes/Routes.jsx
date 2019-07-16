import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Login, NotFound } from '~/app/pages';
import routesNames from '~/utils/routesNames';

const { home, login: loginRoute, notFound, anythingElse } = routesNames;

const Routes = ({ login }) =>
  login ? (
    <Switch>
      <Route exact path={home} component={Home} />
      <Route path={notFound} component={NotFound} />
      <Redirect from={anythingElse} to={notFound} />
    </Switch>
  ) : (
    <Switch>
      <Route path={loginRoute} component={Login} />
      <Redirect from={anythingElse} to={loginRoute} />
    </Switch>
  );

Routes.propTypes = {
  login: PropTypes.bool,
};

Routes.defaultProps = {
  login: false,
};

export default memo(Routes);
