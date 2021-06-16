import { Player } from "./player";

export class Question  { 

    div : HTMLElement[] = []
    chosenQ: number
    player: Player
    questions: object = [
        {
            "image" : "",
            "solution": "oo",
            "question": "bm", // not needed
            "wholeAnswer": "boom",
            "answers": [
                "oo",
                "aa",
                "ee"
            ]
        },
        {
            "image" : "",
            "solution": "aa",
            "question": "mn",
            "wholeAnswer": "maan",
            "answers": [
                "oo",
                "aa",
                "ee"
            ]
        }
    ]

    constructor(player: Player) {
        this.player = player
        console.log('question');
        //document.querySelector('.answer')?.addEventListener("click", this.checkAnswer.bind(this));
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
              //handle click
              this.checkAnswer(event)
            })
          })
    }

    timeout(ms: any) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // get a question
    create() {
        this.chosenQ = Math.floor(Math.random() * 2);
        let question = this.questions[this.chosenQ]
        var showQuestion = question.wholeAnswer.replace(question.solution,'?');
        // insert question
        document.getElementById("question")?.innerText = showQuestion
        
        // insert modal
        document.getElementById("myModal").style.display = "block";
    }

    checkAnswer(e:any) {
        console.log(e.target.innerText);
        let givenAnswer = e.target.innerText
        const question = this.questions[this.chosenQ]
        if(givenAnswer == question.solution){
            console.log('Goed!')
            // show postive modal
            
        } else {
            // show negative modal
            console.log('Fout')
        }
        // remove modal
        this.timeout(2000).then(() => {
            // move
            document.getElementById("myModal").style.display = "none";
        });
    }
}