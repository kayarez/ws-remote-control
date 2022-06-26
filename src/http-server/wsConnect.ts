import { TransformMessage, WriteMessage } from "./streams";
import { Readable } from 'stream';


export function connect(client: any) {

    const stream_readable = new Readable({
        read(){}
    });

    const transformedMessage= new TransformMessage();
    const writeMessage = new WriteMessage(client);
    
    console.log("User connected");

    client.send("Hello from websocket server");

    client.on("message", function (message: string) {
        stream_readable.push( message );
    });
        stream_readable.pipe(transformedMessage).pipe(writeMessage);
  
    client.on("close", function () {

        console.log("User disconnected");
    });
  }