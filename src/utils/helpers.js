/* eslint-disable no-undef */
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import cloneDeep from 'lodash.clonedeep';
import routesNames from '~/utils/routesNames';

export { withStyles, createStyles };

export const writeProfile = profile => {
  ['token', 'username', 'email', 'id'].forEach(item =>
    window.localStorage.setItem(item, profile[item])
  );
};

export const readProfile = key => window.localStorage.getItem(key);

export const logout = pushToLogin => {
  window.localStorage.clear();
  pushToLogin(routesNames.login);
};

export const tableBodyNormalizer = body =>
  body.map((item, index) => {
    const newItem = cloneDeep(item);
    newItem.number = index + 1;
    return newItem;
  });
