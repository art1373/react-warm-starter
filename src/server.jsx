import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';
// import { SnackBarSupplier } from 'material-snackbar-supplier';
import Template from '~/utils/template';
import Index from '~/app';
import store from '~/redux/store';
import theme from '~/utils/theme';

const ServerRenderer = () => (req, res) => {
  const context = {};
  const sheets = new ServerStyleSheets();
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StaticRouter location={req.url} context={context}>
            {/* <SnackBarSupplier settings={{ autoHideDuration: 1500 }}> */}
            <Index />
            {/* </SnackBarSupplier> */}
          </StaticRouter>
        </ThemeProvider>
      </ReduxProvider>
    )
  );
  const helmet = Helmet.renderStatic();
  const jss = sheets.toString();

  res.status(200).send(
    Template({
      helmet,
      jss,
      markup,
      store,
    })
  );
};

export default ServerRenderer;
