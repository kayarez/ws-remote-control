import MouseMove from "./functions/move";
import DrawCircle from "./functions/circle";
import SendMousePos from "./functions/position";
import DrawSquare from "./functions/square";
import DrawRectangle from "./functions/rectangle";
//import SendPrint from "./functions/print";


export async function Router(message: any) {

  let messageText = message[0];

    switch (messageText){
  
    case "mouse_down": 
      MouseMove(0, +message[1]);
      return "mouse_down";     
    
    case "mouse_up":
      MouseMove(0, +message[1] * -1);
      return "mouse_up";   
    
    case "mouse_left":
      MouseMove(+message[1] * -1);
      return "mouse_left";

    case "mouse_right":
      MouseMove(+message[1]);
      return "mouse_right";

    case "mouse_position":
      return `mouse_position ${SendMousePos()}`;

    case "draw_circle":
      DrawCircle(+message[1]);
      return 'draw_circle';

    case "draw_rectangle":
      DrawRectangle(+message[1], +message[2]);
      return 'draw_rectangle';

    case "draw_square":
      DrawSquare(+message[1]);
      return "draw_square";

    case "prnt_scrn":

    default:
      console.log("Unknown command!");
      return;
    }
  }

