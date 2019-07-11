import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import Template from '~/utils/template';
import Index from '~/app';
import theme from '~/utils/theme';

const ServerRenderer = () => (req, res) => {
  const context = {};
  const sheets = new ServerStyleSheets();
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StaticRouter location={req.url} context={context}>
          <Index />
        </StaticRouter>
      </ThemeProvider>
    )
  );
  const helmet = Helmet.renderStatic();
  const jss = sheets.toString();

  res.status(200).send(
    Template({
      helmet,
      jss,
      markup,
    })
  );
};

export default ServerRenderer;
