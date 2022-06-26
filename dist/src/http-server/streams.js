"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformMessage = exports.WriteMessage = void 0;
const stream_1 = require("stream");
const router_1 = require("./router");
class WriteMessage extends stream_1.Writable {
    constructor(wsClient) {
        super();
        this.wsClient = wsClient;
    }
    _write(chunk, encoding, callback) {
        this.wsClient.send(chunk.toString());
        callback();
    }
}
exports.WriteMessage = WriteMessage;
class TransformMessage extends stream_1.Transform {
    constructor() {
        super();
    }
    _transform(chunk, encoding, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let transform = yield (0, router_1.Router)(chunk.toString().trim().split(" "));
                callback(null, transform);
            }
            catch (err) {
                callback(err);
            }
        });
    }
}
exports.TransformMessage = TransformMessage;
