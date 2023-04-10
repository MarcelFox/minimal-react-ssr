import React, { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Olá</title>
    </head>
    <body>
      <div id="root">{props.children}</div>
    </body>
  </html>
);

export default Container
