import {io} from 'socket.io-client'
import { EVENT_INFO, EVENT_MESSAGE } from './constants.js';
import readline from 'readline/promises'
import {stdin as input, stdout as output} from 'process'
const socket = io('ws://localhost:8081');

socket.on('connect', ()=>{
    console.log('Connected to the server.')
});

socket.on(EVENT_INFO, (message) => {
console.log('[Server Info]:', message)
})

const rl = readline.createInterface({input, output});
const fullname = await rl.question('Fullname:', )

async function getInput(){
    const message = await rl.question('message: ')
    socket.emit(EVENT_MESSAGE, { sender: fullname, message })
    await getInput()
}

getInput()
