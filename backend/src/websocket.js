const socketio = require('socket.io');
const Comments = require('./models/Comments');

let io;

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', (socket) => {
        socket.on('receive-comment', async (userId, comment) => {
            console.log('chegou')

            const receiveComment = await Comments.create({
                userId,
                comment
            });

            socket.emit('send-recent-comment', receiveComment);
        })
    })
}