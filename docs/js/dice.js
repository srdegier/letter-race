export class Dice {
    constructor() {
        console.log("dice");
    }
    rollDice() {
        const dice = [...document.querySelectorAll(".die-list")];
        let diceValue = this.getRandomNumber(1, 6);
        dice.forEach((die) => {
            this.toggleClasses(die);
            die.dataset.roll = diceValue;
        });
        return diceValue;
    }
    toggleClasses(die) {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
    }
    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
//# sourceMappingURL=dice.js.map