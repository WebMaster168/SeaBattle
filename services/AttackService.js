import { CELL } from "../constants/gameConstants.js";
 
export class AttackService {
 
    static attack(target, x, y) {
 
        const value =
            target.grid[y][x];
 
        if (
            value === CELL.HIT ||
            value === CELL.MISS
        ) {
 
            return {
                alreadyShot: true
            };
        }
 
        if (value === CELL.SHIP) {
 
            target.grid[y][x] =
                CELL.HIT;
 
            const ship =
                target.ships.find(ship =>
                    ship.cells.some(
                        cell =>
                            cell.x === x &&
                            cell.y === y
                    )
                );
 
            let sunk = false;
 
            if (ship) {
 
                sunk =
                    ship.cells.every(
                        cell =>
                            target.grid[
                                cell.y
                            ][
                                cell.x
                            ] === CELL.HIT
                    );
 
                if (sunk) {
                    ship.destroyed = true;
                }
            }
 
            return {
                hit: true,
                sunk
            };
        }
 
        target.grid[y][x] =
            CELL.MISS;
 
        return {
            hit: false,
            sunk: false
        };
    }
 
}