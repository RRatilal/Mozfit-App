const socketio = require('socket.io');

let io;

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', async (socket) => {
        console.log("Connected:", socket.id)
    })
}