/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Index from '~/app';
import store from '~/redux/store';
import theme from '~/utils/theme';

const ClientRender = () => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.remove();
    }
    const serverStore = document.querySelector('#store-server-side');
    if (serverStore) {
      serverStore.remove();
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
  <ReduxProvider store={store}>
    <ClientRender />
  </ReduxProvider>,
  document.getElementById('root')
);
