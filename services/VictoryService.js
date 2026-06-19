import { CELL } from "../constants/gameConstants.js";
 
export class VictoryService {
 
    static check(player) {
 
        for (const row of player.grid) {
 
            if (
                row.includes(CELL.SHIP)
            ) {
                return false;
            }
 
        }
 
        return true;
    }
}
 