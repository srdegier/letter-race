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
        this.player.push(new Player("Speler 1", true));
        this.player.push(new Player("Speler 2", false));
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    nextTurn() {
        let pTurn = 0;
        (this.player[0].turn ? pTurn = 0 : pTurn = 1);
        const diceValue = this.dice.rollDice();
        this.timeout(2000).then(() => {
            console.log('Player dice');
            this.player[pTurn].move(diceValue, false);
            const victorySound = new Audio('./sounds/safari_theme.mp3');
            victorySound.play();
        });
    }
}
new Game();
//# sourceMappingURL=game.js.map