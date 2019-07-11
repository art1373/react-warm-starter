import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Index from '~/app';
import theme from '~/utils/theme';

const ClientRender = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </ThemeProvider>
  );
};

hydrate(
  <ClientRender />,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
