import { Board } from "./board.js";
class Game {
    constructor() {
        console.log("Game was created!");
        console.log("hey?");
        this.board = new Board();
        this.gameLoop();
    }
    gameLoop() {
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map