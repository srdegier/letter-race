import { Dice } from "./dice.js"
import { Player } from "./player.js"


class Game {

    dice: Dice
    protected player: Player[] = []

    constructor() {
        console.log("Game was created!")
        // let test = document.getElementById("roll-button");
        // console.log(test);
        
        this.dice = new Dice()
        document.getElementById("roll-button")?.addEventListener("click", this.nextTurn.bind(this));

        // this.gameLoop()
        this.create()
        // this.nextTurn()
    }

    create() : void {
        // insert 2 players
        this.player.push(new Player("p1", true))
        this.player.push(new Player("p2", false))
    }

    timeout(ms: any) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    nextTurn() {
        // determine who's turn
        if (this.player[0].turn) {
            console.log('p1 turn')
            let diceValue = this.dice.rollDice()

            this.timeout(2000).then(() => {
                // move
                this.player[0].move(diceValue)
            });
            
            // move and opdracht


        } else {
            console.log('p2 turn')
        }
        // requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()