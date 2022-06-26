import { Transform, Writable } from "stream";
import { Router } from "./router";
import { WebSocket } from "ws";

export interface WriteMessage {
  wsClient: WebSocket;
}

export class WriteMessage extends Writable {

  constructor(wsClient: any) {
      super();
      this.wsClient = wsClient;
  }

  _write(chunk:any,encoding: any,callback: () => void) {    
      this.wsClient.send(chunk.toString())
      callback();
  }

}


export class TransformMessage extends Transform {
    constructor(){
          super();
    }
    async _transform(chunk:Buffer, encoding:any, callback:any) {
      try {   

          let transform = await Router(chunk.toString().trim().split(" "))
          callback(null, transform);

      } catch (err) {
        
          callback(err);
      }
    }
  }

