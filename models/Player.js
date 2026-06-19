import { GRID_SIZE, CELL } from "../constants/gameConstants.js";
 
export class Player {
 
    constructor(name) {
 
        this.name = name;
 
        this.grid = Array.from(
            { length: GRID_SIZE },
            () => Array(GRID_SIZE).fill(CELL.EMPTY)
        );

        this.ships = []
    }
}