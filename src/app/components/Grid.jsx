import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import MuiGrid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '~/utils/helpers';

const Grid = ({ children, classes, className, ...rest }) => (
  <MuiGrid className={cn(classes.root, className)} {...rest}>
    {children}
  </MuiGrid>
);

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func,
  ]).isRequired,
  className: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

Grid.defaultProps = {
  className: undefined,
};

const styles = () =>
  createStyles({
    root: {
      display: 'flex',
    },
  });

export default withStyles(styles)(Grid);
