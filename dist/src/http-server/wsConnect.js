"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const streams_1 = require("./streams");
const stream_1 = require("stream");
function connect(client) {
    const stream_readable = new stream_1.Readable({
        read() { }
    });
    const transformedMessage = new streams_1.TransformMessage();
    const writeMessage = new streams_1.WriteMessage(client);
    console.log("User connected");
    client.send("Hello from websocket server");
    client.on("message", function (message) {
        stream_readable.push(message);
    });
    stream_readable.pipe(transformedMessage).pipe(writeMessage);
    client.on("close", function () {
        console.log("User disconnected");
    });
}
exports.connect = connect;
