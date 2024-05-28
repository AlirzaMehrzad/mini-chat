import { Server } from 'socket.io'
import { Socket } from 'socket.io-client';
import { EVENT_INFO } from './constants.js';

const io = new Server(8081);

console.log('Server is started...!')

io.on('connection', (socket) => {
    console.log('A client has been connected')
    socket.emit(EVENT_INFO, 'Welcome to simple chat :)')
});

