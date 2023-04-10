import React from 'react';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

import Container from './pages/_container';
import Router from './pages/_router';

dotenv.config();

const app = express();
app.use(cors());

const compiler = webpack(require('../webpack.config'));
app.use(webpackDevMiddleware(compiler, { serverSideRender: true }));
app.use(webpackHotMiddleware(compiler));

app.get('/health', (_: any, res: any) => {
  res.status(200).send({ message: 'ok' });
});

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <Container>
      <StaticRouter location={req.url}>
        <Router />
      </StaticRouter>
    </Container>,
    {
      bootstrapScripts: ['client/bundle.js'],
      onShellReady() {
        res.set('Content-Type', 'text/html');
        pipe(res);
      },
    }
  );
});

app.listen(8000);
console.info('\nRunning at 8000\n');
