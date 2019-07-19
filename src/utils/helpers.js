import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

export { withStyles, createStyles };

export const writeProfile = profile => {
  ['token', 'username', 'email', 'id'].forEach(item =>
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(item, profile[item])
  );
};

// eslint-disable-next-line no-undef
export const readProfile = key => window.localStorage.getItem(key);
