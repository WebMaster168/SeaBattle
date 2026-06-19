import { GameController } from "./game/GameController.js";
import { OrientationHandler } from "./ui/OrientationHandler.js";
 
const toggleBtn =
    document.getElementById(
        "toggle-board-btn"
    );
 
const playerSection =
    document.querySelector(
        ".player-section"
    );
 
const botSection =
    document.querySelector(
        ".bot-section"
    );
 
let showingPlayer = false;
 
function updateMobileView() {
 
    if (window.innerWidth > 900)
        return;
 
    if (showingPlayer) {
 
        playerSection.classList.remove(
            "hidden-mobile"
        );
 
        botSection.classList.add(
            "hidden-mobile"
        );
 
        toggleBtn.textContent =
            "Показать поле врага";
 
    } else {
 
        botSection.classList.remove(
            "hidden-mobile"
        );
 
        playerSection.classList.add(
            "hidden-mobile"
        );
 
        toggleBtn.textContent =
            "Показать своё поле";
    }
}
 
toggleBtn.addEventListener(
    "click",
    () => {
 
        showingPlayer =
            !showingPlayer;
 
        updateMobileView();
    }
);
 
window.addEventListener(
    "resize",
    updateMobileView
);
 
updateMobileView();
 
//OrientationHandler.init();
 
const game =
    new GameController();
 
game.start();

 
