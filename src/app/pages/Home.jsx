import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

const Home = ({ classes, count }) => (
  <div className={classes.root}>
    <Helmet title="home" />
    <div>Home</div>
    <div>{count}</div>
  </div>
);

Home.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  count: PropTypes.number.isRequired,
};

const styles = ({ palette }) =>
  createStyles({
    root: {
      backgroundColor: palette.primary.main,
    },
  });

const mapStateToProps = ({ counter: { count } }) => ({ count });

export default compose(
  memo,
  connect(mapStateToProps),
  withStyles(styles)
)(Home);
