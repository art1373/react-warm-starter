export default ({ markup, helmet }) =>
  `<!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.script.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${markup}</div>
      </body>
    </html>`;
