// import { Game } from "./game.js"

export class Dice {

    constructor() {  
        console.log("dice");
    }

    public rollDice() : Number {
        const dice = [...document.querySelectorAll(".die-list")];
        let diceValue = this.getRandomNumber(1, 6);
        dice.forEach((die) => {
            this.toggleClasses(die)
            die.dataset.roll = diceValue;
            const diceSound = new Audio('./sounds/dice.mp3');
            diceSound.play();
        });

        return diceValue;
    }
      
    private toggleClasses(die: Element) : void {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
    }
    
    private getRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}