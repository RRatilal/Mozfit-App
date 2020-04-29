import socketio from 'socket.io-client';

const socket = socketio('http://192.168.43.251:3333', {
    autoConnect: false,
    upgrade: false
});

function sendMessage(userId: String, comment: String) {
    socket.emit('receive-comment', userId, comment);
}

function receiveComment(receiveComment: any) {
    socket.on('send-recent-comment', receiveComment);
}

function connect() {
    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.close()
    }
}

export {
    connect,
    sendMessage,
    receiveComment,
    disconnect,
}