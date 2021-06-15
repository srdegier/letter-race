import { Question } from "./Question.js"

export class Player  { 

    div : HTMLElement
    name: string
    turn: boolean
    previousTile: number = 0
    currentTile: number = 0

    question: Question

    constructor(name: string, turn: boolean) {
        this.name = name
        this.turn = turn
        this.question = new Question()
        this.create()
    }

    private create() {
        this.div = document.createElement("player")
        this.div.style.filter = `hue-rotate(${Math.random() * 360}deg)`; // zijn soms hetzelfde
        this.getTile(0).appendChild(this.div)
    }

    private getTile(position: number) : Element {
        var x = document.getElementsByClassName("tile");
        return x[position]
    }

    move(dice: number) {
        // console.log(dice);
        // set old position
        // console.log(this.previousTile);
        // set new position
        console.log(this.previousTile)
        this.currentTile = dice;
        for (let i = 0; i < dice; i++) {
            setTimeout(() => {
                this.getTile((this.previousTile + 1) + i).appendChild(this.div)
                if(this.currentTile == (i+1)) {
                    this.previousTile = this.previousTile + this.currentTile;
                    // get the question modal with corresponding question
                    this.question.create()
                }
            }, i * 500);            
        }
        //console.log('eh');
        //this.previousTile = this.currentTile
    }
}