import serialize from 'serialize-javascript';

export default ({ markup, helmet, jss, store }) =>
  `<!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
          <style id="jss-server-side">${jss}</style>
          <script id="store-server-side">
            window.__Store__=${serialize(store)}
          </script>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.script.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${markup}</div>
      </body>
    </html>`;
