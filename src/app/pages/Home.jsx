import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getArticlesList } from '~/redux/actions';
import { BaseLayout, Grid, Typography, Table } from '~/app/components';
import { tableBodyNormalizer } from '~/utils/helpers';
import { articlesPerPage } from '~/utils/constants';

const tableHead = [
  { key: 'number', title: '#' },
  { key: 'title', title: 'Title' },
  { key: 'author', render: author => author.username, title: 'Author' },
  {
    key: 'tagList',
    render: tags => tags.map(tag => <span key={tag}>{tag}</span>),
    title: 'Tags',
  },
  { key: 'description', title: 'Excerpt' },
  {
    key: 'createdAt',
    render: date => new Date(date).toDateString(),
    title: 'Created',
  },
  { key: 'actions', render: () => <span>A</span>, title: '' },
];

const Home = ({ classes, getArticles, articles: { articles = [] } }) => {
  useEffect(() => {
    getArticles(articlesPerPage);
  }, []);
  return (
    <>
      <Helmet title="home" />
      <BaseLayout>
        <Grid className={classes.root}>
          <Grid className={classes.pageTitle}>
            <Typography variant="h4">All Posts</Typography>
          </Grid>
          <Grid className={classes.pageContent}>
            {!!articles.length && (
              <Table head={tableHead} body={tableBodyNormalizer(articles)} />
            )}
          </Grid>
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

const styles = ({ spacing }) =>
  createStyles({
    pageContent: {
      overflow: 'hidden',
      padding: [[0, spacing(2), spacing(2)]],
    },
    pageTitle: {
      padding: spacing(2),
    },
    root: {
      flexDirection: 'column',
      flexGrow: 1,
      height: '100%',
    },
  });

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = dispatch => ({
  getArticles: perPage => dispatch(getArticlesList(perPage)),
});

export default compose(
  memo,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Home);
