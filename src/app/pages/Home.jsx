import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getArticlesList } from '~/redux/actions';
import { BaseLayout, Grid } from '~/app/components';

const Home = ({ classes }) => (
  <>
    <Helmet title="home" />
    <BaseLayout>
      <Grid className={classes.root}>Here will place articles</Grid>
    </BaseLayout>
  </>
);

Home.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

const styles = () =>
  createStyles({
    root: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });

const mapStateToProps = ({ articlesList }) => ({ articlesList });

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticlesList()),
});

export default compose(
  memo,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Home);
