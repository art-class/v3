import { getLastCommit } from 'git-last-commit';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import { hostname } from 'node:os';
import { join } from 'node:path';
import createBareServer from '@tomphttp/bare-server-node';
import express from 'express';
import axios from 'axios';

const publicPath = fileURLToPath(new URL('./static/', import.meta.url));
const bare = createBareServer('/bare/');
const server = createServer();
const app = express();

const port = process.env.PORT || 3000;

getLastCommit((err, commit) => {
  if (!err) console.log(`Latest update: ${commit.subject} (${commit.committer.name})`);
});

app.use((req, res) => res.status(404).sendFile(join(publicPath, '404.html')));
app.use(express.static(publicPath));
app.set('trust proxy', true);

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req)) bare.routeUpgrade(req, socket, head);
  else socket.end();
});

server.listen({ port }, () => {
  console.log('Listening on:');
  console.log(`\thttp://localhost:${server.address().port}`);
  console.log(`\thttp://${hostname()}${server.address().port != 80 ? (':' + server.address().port) : ''}`);
  console.log(
    `\thttp://${
      server.address().family === 'IPv6' ? `[${server.address().address}]` : server.address().address
    }:${server.address().port}`
  );
});
