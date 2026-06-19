import { GameController } from "./game/GameController.js";
import { OrientationHandler } from "./ui/OrientationHandler.js";
 
function scaleGame() {
 
    const root =
        document.getElementById(
            "game-root"
        );
 
    if (!root) return;
 
    root.style.transform =
        "scale(1)";
 
    const scaleX =
        window.innerWidth /
        root.offsetWidth;
 
    const scaleY =
        window.innerHeight /
        root.offsetHeight;
 
    const scale =
        Math.min(
            scaleX,
            scaleY,
            1
        );
 
    root.style.transform =
        `scale(${scale})`;
}
 
window.addEventListener(
    "resize",
    scaleGame
);
 
window.addEventListener(
    "orientationchange",
    scaleGame
);
 
OrientationHandler.init();
 
const game =
    new GameController();
 
game.start();
 
/*
 * Ждём пока отрисуются поля
 */
requestAnimationFrame(() => {
    scaleGame();
});