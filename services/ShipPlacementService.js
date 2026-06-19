import { GRID_SIZE, CELL } from "../constants/gameConstants.js";
import {Ship} from "../models/Ship.js"

export class ShipPlacementService {
 
    static placeRandomShips(player) {
 
        const sizes = [1, 2, 3, 4];
 
        for (let s = 0; s < sizes.length; s++) {
 
            for (let count = 0; count < 4 - s; count++) {
 
                let placed = false;
 
                while (!placed) {
 
                    const x = Math.floor(Math.random() * GRID_SIZE);
                    const y = Math.floor(Math.random() * GRID_SIZE);
 
                    const dir =
                        Math.floor(Math.random() * 2);
 
                    const ship = [];
 
                    for (let i = 0; i < sizes[s]; i++) {
 
                        ship.push({
                            x: x + (dir === 0 ? i : 0),
                            y: y + (dir === 1 ? i : 0)
                        });
 
                    }
 
                    if (
                        this.isValidPosition(
                            player,
                            ship
                        )
                    ) {
 
                        this.placeShip(
                            player,
                            ship
                        );
 
                        placed = true;
                    }
                }
            }
        }
    }
 
    static isValidPosition(player, ship) {
 
        for (const part of ship) {
 
            const { x, y } = part;
 
            if (
                x < 0 ||
                y < 0 ||
                x >= GRID_SIZE ||
                y >= GRID_SIZE
            ) {
                return false;
            }
 
            if (
                player.grid[y][x] !== CELL.EMPTY
            ) {
                return false;
            }
 
            for (let dx = -1; dx <= 1; dx++) {
 
                for (let dy = -1; dy <= 1; dy++) {
 
                    const nx = x + dx;
                    const ny = y + dy;
 
                    if (
                        nx >= 0 &&
                        ny >= 0 &&
                        nx < GRID_SIZE &&
                        ny < GRID_SIZE &&
                        player.grid[ny][nx] === CELL.SHIP
                    ) {
                        return false;
                    }
                }
            }
        }
 
        return true;
    }
 
    static placeShip(player, shipCells) {
 
        shipCells.forEach(cell => {
 
            player.grid[cell.y][cell.x] =
                CELL.SHIP;
 
        });

        player.ships.push(
            new Ship(shipCells)
        )
    }
}