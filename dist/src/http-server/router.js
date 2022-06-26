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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const move_1 = __importDefault(require("./functions/move"));
const circle_1 = __importDefault(require("./functions/circle"));
const position_1 = __importDefault(require("./functions/position"));
const square_1 = __importDefault(require("./functions/square"));
const rectangle_1 = __importDefault(require("./functions/rectangle"));
const print_1 = __importDefault(require("./functions/print"));
function Router(message) {
    return __awaiter(this, void 0, void 0, function* () {
        let messageText = message[0];
        switch (messageText) {
            case "mouse_down":
                (0, move_1.default)(0, +message[1]);
                return "mouse_down";
            case "mouse_up":
                (0, move_1.default)(0, +message[1] * -1);
                return "mouse_up";
            case "mouse_left":
                (0, move_1.default)(+message[1] * -1);
                return "mouse_left";
            case "mouse_right":
                (0, move_1.default)(+message[1]);
                return "mouse_right";
            case "mouse_position":
                return `mouse_position ${(0, position_1.default)()}`;
            case "draw_circle":
                (0, circle_1.default)(+message[1]);
                return 'draw_circle';
            case "draw_rectangle":
                (0, rectangle_1.default)(+message[1], +message[2]);
                return 'draw_rectangle';
            case "draw_square":
                (0, square_1.default)(+message[1]);
                return "draw_square";
            case "prnt_scrn":
                print_1.default;
                let image = yield (0, print_1.default)();
                return `prnt_scrn ${image}`;
            default:
                console.log("Unknown command!");
                return;
        }
    });
}
exports.Router = Router;
