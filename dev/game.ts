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
        this.player.push(new Player("Speler 1", true))
        this.player.push(new Player("Speler 2", false))
    }

    timeout(ms: any) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    nextTurn() {

        let pTurn = 0;
        (this.player[0].turn ? pTurn = 0 : pTurn = 1)


        const diceValue = this.dice.rollDice()

        this.timeout(2000).then(() => {
            // move
            console.log('Player dice');
            this.player[pTurn].move(diceValue, false)
        });
        

        // change turn players
        // if(this.player[0].turn == false) {
        //     this.player[1].turn = true;
        // } else {
        //     this.player[0].turn = true;
        //     this.player[1].turn = false;
        // }
        // requestAnimationFrame(() => this.gameLoop())
    }
}

new Game()