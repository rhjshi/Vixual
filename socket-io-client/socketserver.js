const express = require('express');
const http = require("http");
const socketIo = require('socket.io');
//const axios = require("axios");

const port = process.env.PORT || 3000;

const app = express();

/*var server = app.listen(port, function() {
    console.log(`listening on port ${port}`)
});*/
const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));

var io = socketIo(server);

io.on('connection', function(socket) {
    console.log('new client connected')

    socket.on('error', function() {});

    socket.on('query', q =>  {
        console.log("got:", q);
        io.emit('sendmsg', q);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
