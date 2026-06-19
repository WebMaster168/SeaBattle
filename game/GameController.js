import { Player } from "../models/Player.js";
import { RadarRenderer } from "../ui/RadarRenderer.js";
import { ShipPlacementService } from "../services/ShipPlacementService.js";
import { AttackService } from "../services/AttackService.js";
import { VictoryService } from "../services/VictoryService.js";

import { BoardRenderer } from "../ui/BoardRenderer.js";
import { StatsRenderer } from "../ui/StatsRenderer.js";
import { CELL } from "../constants/gameConstants.js";
 
export class GameController {
 
    constructor() {
 
        this.player =
            new Player("Игрок");
 
        this.bot =
            new Player("Бот");
 
        this.stats = {
            hits: 0,
            misses: 0,
            sunk: 0,
            turn: "Игрок"
        };
 
        this.gameOver = false;
    }
 
    start() {
 
        ShipPlacementService
            .placeRandomShips(
                this.player
            );
 
        ShipPlacementService
            .placeRandomShips(
                this.bot
            );
 
        this.render();
    }
 
    render() {
        RadarRenderer.render()
        BoardRenderer.render(
            "player-board-wrapper",
            this.player,
            true
        );
 
        BoardRenderer.render(
            "bot-board-wrapper",
            this.bot,
            false,
            (x, y) =>
                this.playerTurn(
                    x,
                    y
                )
        );
 
        StatsRenderer.render(
            this.stats
        );
    }
 
    playerTurn(x, y) {
 
        if(this.gameOver){
            return;
        }
 
        const result =
            AttackService.attack(
                this.bot,
                x,
                y
            );
 
        if(result.alreadyShot){
            return;
        }
 
        if(result.hit){
 
            this.stats.hits++;
            if(result.sunk){
                this.stats.sunk++;
            }
        }else{
 
            this.stats.misses++;
 
        }
        
 
        this.render();
 
        if(
            VictoryService.check(
                this.bot
            )
        ){
 
            this.gameOver = true;
 
            this.stats.turn =
                "Победа";
 
            this.render();
 
            setTimeout(() => {
 
                modal.classList.add('enable')
                modal.textContent = "Игрок победил!"
 
            }, 200);
 
            return;
        }
 
        this.stats.turn = "Бот";
 
        this.render();
 
        setTimeout(
            () => this.botTurn(),
            700
        );
    }
 
    botTurn() {
 
        if(this.gameOver){
            return;
        }
 
        let x;
        let y;
 
        do {
 
            x =
                Math.floor(
                    Math.random() * 10
                );
 
            y =
                Math.floor(
                    Math.random() * 10
                );
 
        } while (
 
            this.player.grid[y][x] === CELL.HIT ||
 
            this.player.grid[y][x] === CELL.MISS
 
        );
 
        AttackService.attack(
            this.player,
            x,
            y
        );
 
        this.render();
 
        if(
            VictoryService.check(
                this.player
            )
        ){
 
            this.gameOver = true;
 
            this.stats.turn =
                "Поражение";
 
            this.render();
 
            setTimeout(() => {
 
                modal.classList.add('enable')
                modal.textContent = "Бот победил!"
 
            }, 200);
 
            return;
        }
 
        this.stats.turn =
            "Игрок";
 
        this.render();
    }
 
    restart() {
 
        this.player =
            new Player("Игрок");
 
        this.bot =
            new Player("Бот");
 
        this.stats = {
            hits: 0,
            misses: 0,
            sunk: 0,
            turn: "Игрок"
        };
 
        this.gameOver = false;
 
        ShipPlacementService
            .placeRandomShips(
                this.player
            );
 
        ShipPlacementService
            .placeRandomShips(
                this.bot
            );
 
        this.render();
    }
 
}


