class Game {
    constructor() {
        console.log("Game was created!")
        console.log("hey?")
        // create board
        this.gameLoop()
    }

    gameLoop() {
        //TODO: update board
        
        requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()
