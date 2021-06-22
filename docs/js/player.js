import { Question } from "./question.js";
export class Player {
    constructor(name, turn) {
        this.previousTile = 0;
        this.currentTile = 0;
        this.winCheck = false;
        this.name = name;
        this.turn = turn;
        this.question = new Question(this);
        this.create();
    }
    setTurn() {
        this.turn = false;
    }
    create() {
        this.div = document.createElement("player");
        this.div.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        this.getTile(0).appendChild(this.div);
    }
    getTile(position) {
        var x = document.getElementsByClassName("tile");
        return x[position];
    }
    move(dice, notByDice) {
        this.currentTile = dice;
        const totalTiles = document.getElementsByClassName("tile").length;
        if ((this.previousTile + dice) >= (totalTiles - 1)) {
            console.log('New dice roll because to high.');
            let newValue = (this.previousTile + dice) - (totalTiles - 1);
            this.currentTile = (dice) - newValue;
        }
        for (let i = 0; i < this.currentTile; i++) {
            setTimeout(() => {
                this.getTile((this.previousTile + 1) + i).appendChild(this.div);
                if (this.currentTile == (i + 1)) {
                    this.previousTile = this.previousTile + this.currentTile;
                    if ((totalTiles - 1) == this.previousTile) {
                        console.log(`${this.name} goed gedaan mijn jongggeenn`);
                        this.winCheck = true;
                        this.showWinModal();
                    }
                    else if (notByDice == false) {
                        console.log(this.winCheck);
                        this.question.create();
                    }
                    else {
                        console.log('bruh');
                    }
                }
            }, i * 500);
        }
    }
    // Plays sound if player wins
    showWinModal() {
        const victorySound = new Audio('./sounds/victory.mp3');
        victorySound.play();

        document.getElementById("myModal2").style.display = "block";
        console.log('displaying finish modal');
    }
}
//# sourceMappingURL=player.js.map