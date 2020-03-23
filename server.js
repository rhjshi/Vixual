// https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// our localhost port
const port = process.env.PORT || 4001;

const app = express();

// server instance
const server = http.createServer(app);

// socket io instance using server
const io = socketIO(server);

// setup io connection
io.on('connection', client => {
  console.log('user connected');

  client.on('disconnect', () => {
    console.log('user disconnected');
  });

  client.on('test emit', () => {
    console.log('TEST123');
  });
});

server.listen(port, () => console.log(`Listening to ${port}`));