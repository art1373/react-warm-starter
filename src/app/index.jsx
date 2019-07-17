import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Routes from '~/app/routes/Routes';
import { withStyles } from '~/utils/helpers';
import globalStyles from '~/utils/globalStyles';

const Index = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const auth = localStorage.getItem('auth');
    if (auth) {
      setLogin(true);
    }
  }, []);

  return (
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
      <Routes login={login} />
    </>
  );
};

export default withStyles(globalStyles)(Index);
