import {httpServer} from './src/http-server/http';
import { WebSocket } from "ws";
import { connect } from './src/http-server/wsConnect';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocket.Server ({
    port: 8080
}, () => {
    console.log('Websocket server starts on the 8080 port!');
})


wss.on("connection", connect)



