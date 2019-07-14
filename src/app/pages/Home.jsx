import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getArticlesList } from '~/redux/actions';

const Home = ({
  getArticles,
  classes,
  articlesList: { articles = [] } = {},
}) => (
  <div className={classes.root}>
    <Helmet title="home" />
    <div>Home</div>
    <button onClick={getArticles}>GET</button>
    {articles.map(({ slug, title }) => (
      <div key={slug}>{title}</div>
    ))}
  </div>
);

Home.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  getArticles: PropTypes.func.isRequired,
  articlesList: PropTypes.array.isRequired,
};

const styles = ({ palette }) =>
  createStyles({
    root: {
      backgroundColor: palette.primary.main,
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
