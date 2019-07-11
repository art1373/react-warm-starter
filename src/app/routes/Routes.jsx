import React, {memo} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Home, Login, NotFound } from '~/app/pages';
import routesNames from '~/utils/routesNames';

const {
    home,
    login,
    notFound,
    anythingElse,
} = routesNames;

const Routes = () => (
  <Switch>
    <Route exact path={home} component={Home} />
    <Route path={login} component={Login} />
    <Route path={notFound} component={NotFound} />
    <Redirect from={anythingElse} to={notFound} />
  </Switch>
);

export default memo(Routes);
