import { Question } from "./question.js";
export class Player {
    constructor(name, turn) {
        this.previousTile = 0;
        this.currentTile = 0;
        this.name = name;
        this.turn = turn;
        this.question = new Question(this);
        this.create();
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
    move(dice) {
        this.currentTile = dice;
        for (let i = 0; i < dice; i++) {
            setTimeout(() => {
                this.getTile((this.previousTile + 1) + i).appendChild(this.div);
                if (this.currentTile == (i + 1)) {
                    this.previousTile = this.previousTile + this.currentTile;
                    this.question.create();
                }
            }, i * 500);
        }
    }
}
//# sourceMappingURL=player.js.map