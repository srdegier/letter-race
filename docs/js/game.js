import { Dice } from "./dice.js";
import { Player } from "./player.js";
class Game {
    constructor() {
        var _a;
        this.player = [];
        console.log("Game was created!");
        this.dice = new Dice();
        (_a = document.getElementById("roll-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.nextTurn.bind(this));
        this.create();
    }
    create() {
        this.player.push(new Player("p1", true));
        this.player.push(new Player("p2", false));
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    nextTurn() {
        if (this.player[0].turn) {
            console.log('p1 turn');
            let diceValue = this.dice.rollDice();
            this.timeout(2000).then(() => {
                this.player[0].move(diceValue);
            });
        }
        else {
            console.log('p2 turn');
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map