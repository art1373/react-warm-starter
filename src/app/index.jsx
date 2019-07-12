import React from 'react';
import Helmet from 'react-helmet';
import Routes from '~/app/routes/Routes';

const Index = () => (
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
    <Routes />
  </>
);

export default Index;
