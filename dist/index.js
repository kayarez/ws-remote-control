"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./src/http-server/http");
const ws_1 = require("ws");
const wsConnect_1 = require("./src/http-server/wsConnect");
const HTTP_PORT = 3000;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
http_1.httpServer.listen(HTTP_PORT);
const wss = new ws_1.WebSocket.Server({
    port: 8080
}, () => {
    console.log('Websocket server starts on the 8080 port!');
});
wss.on("connection", wsConnect_1.connect);
