import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getArticlesList } from '~/redux/actions';
import { BaseLayout, Grid } from '~/app/components';

const Home = ({ classes, getArticles, articles: { articles = [] } }) => {
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      <Helmet title="home" />
      <BaseLayout>
        <Grid className={classes.root} ttt={console.log('sss')}>
          {articles.map(({ title, slug }) => (
            <span key={slug}>{title}</span>
          ))}
        </Grid>
      </BaseLayout>
    </>
  );
};

Home.propTypes = {
  articles: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.object),
  }),
  classes: PropTypes.instanceOf(Object).isRequired,
  getArticles: PropTypes.func.isRequired,
};

Home.defaultProps = {
  articles: { articles: [] },
};

const styles = () =>
  createStyles({
    root: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });

const mapStateToProps = ({ articles }) => ({ articles });

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
