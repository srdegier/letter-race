import { Question } from "./question.js"

export class Player  { 

    div : HTMLElement
    name: string
    turn: boolean
    previousTile: number = 0
    currentTile: number = 0
    winCheck: boolean = false
    question: Question

    constructor(name: string, turn: boolean) {
        this.name = name
        this.turn = turn
        this.question = new Question(this)
        this.create()
    }

    setTurn() : void {
        this.turn = false
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

    move(dice: any, notByDice: boolean) {
        this.currentTile = dice;
        const totalTiles = document.getElementsByClassName("tile").length
 
        if ((this.previousTile + dice) >= (totalTiles - 1)) {
            console.log('New dice roll because to high.')
            let newValue = (this.previousTile + dice) - (totalTiles - 1);
            this.currentTile = (dice) - newValue;
        }
 
        for (let i = 0; i < this.currentTile; i++) {
            setTimeout(() => {
                this.getTile((this.previousTile + 1) + i).appendChild(this.div)
                if(this.currentTile == (i+1)) {
                    this.previousTile = this.previousTile + this.currentTile;
 
                    if ((totalTiles - 1) == this.previousTile) {
                        console.log(`${this.name} goed gedaan mijn jongggeenn`);
                        this.winCheck = true;                        
                        this.showWinModal()
                    } else if (notByDice == false) {
                        console.log(this.winCheck)
                        this.question.create()
                    } else {
                       console.log('bruh'); 
                    }
 
                }
            }, i * 500);            
        }
    }
    showWinModal() {
        document.getElementById("myModal2").style.display = "block";
        // document.getElementById("question")?.innerText = `${this.name} heeft gewonnen!`;
        console.log('displaying finish modal');
    }
}