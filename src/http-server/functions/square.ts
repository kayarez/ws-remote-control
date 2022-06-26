import * as robot from "robotjs";

const DrawSquare = function(widthRec: any, heightRec?: any) {

    if (!heightRec) {
      heightRec = widthRec;
    }
    const mousePos = robot.getMousePos();
    
    robot.mouseToggle("down");
    robot.moveMouseSmooth(mousePos.x + widthRec, mousePos.y, 10);
    robot.moveMouseSmooth(mousePos.x + widthRec, mousePos.y + heightRec, 10);
    robot.moveMouseSmooth(mousePos.x, mousePos.y + heightRec, 10);
    robot.moveMouseSmooth(mousePos.x, mousePos.y, 10);
    robot.mouseToggle("up");
  }

export default DrawSquare;