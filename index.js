import { GameController } from "./game/GameController.js";
import { OrientationHandler } from "./ui/OrientationHandler.js";

OrientationHandler.init();

const game = new GameController()

game.start();