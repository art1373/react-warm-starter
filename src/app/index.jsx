import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Routes from '~/app/routes/Routes';
import { withStyles } from '~/utils/helpers';
import globalStyles from '~/utils/globalStyles';

const Index = ({ userIsLogin, isLogin }) => (
  <>
    <Helmet
      htmlAttributes={{ amp: undefined, lang: 'en' }}
      titleTemplate="%s | website.ir"
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { content: 'website.ir', name: 'description' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      ]}
      script={[
        { defer: undefined, src: '/assets/js/vendor.js' },
        { defer: undefined, src: '/assets/js/client.js' },
      ]}
    />
    <Routes isUserLogin={userIsLogin || isLogin} />
  </>
);

Index.propTypes = {
  isLogin: PropTypes.bool,
  userIsLogin: PropTypes.bool,
};

Index.defaultProps = {
  isLogin: undefined,
  userIsLogin: undefined,
};

export default compose(
  memo,
  connect(({ login: { userIsLogin } } = {}) => ({
    userIsLogin,
  })),
  withStyles(globalStyles)
)(Index);
