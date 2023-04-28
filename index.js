import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { hostname } from 'node:os';
import { createServer } from 'node:http';
import createBareServer from '@tomphttp/bare-server-node';
import express from 'express';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { getLastCommit } from 'git-last-commit';

getLastCommit((err, commit) => {
  if (!err) console.log(`Latest update: ${commit.subject} (${commit.committer.name})`);
});

const publicPath = fileURLToPath(new URL('./static/', import.meta.url));
const bare = createBareServer('/bare/');
const server = createServer();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use('/uv/', express.static(uvPath));
app.use((req, res) => res.sendFile(join(publicPath, '404.html')).status(404));

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen({ port }, () => {
  console.log('Listening on:');
  console.log(`\thttp://localhost:${server.address().port}`);
  console.log(`\thttp://${hostname()}:${server.address().port}`);
  console.log(
    `\thttp://${
      server.address().family === 'IPv6' ? `[${server.address().address}]` : server.address().address
    }:${server.address().port}`
  );
});
