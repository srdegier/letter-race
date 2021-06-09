import { Board } from "./board.js"

class Game {

    board: Board

    constructor() {
        console.log("Game was created!")
        console.log("hey?")

        // create board
        this.board = new Board()

        this.gameLoop()
    }

    gameLoop() {
        //TODO: update board
        
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()
