export default ({ markup, helmet, jss }) =>
  `<!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.script.toString()}
          <style id="jss-server-side">${jss}</style>
      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${markup}</div>
      </body>
    </html>`;
