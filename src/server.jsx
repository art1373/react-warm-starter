import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Template from '~/utils/template';
import Index from '~/app';

const serverRenderer = () => (req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Index />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  res.status(200).send(
    Template({
      helmet,
      markup,
    })
  );
};

export default serverRenderer;
