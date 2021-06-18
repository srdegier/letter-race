import { Player } from "./player";

export class Question  { 

    div : HTMLElement[] = []
    chosenQ: number
    player: Player
    questions: object = [
        {
            "image" : "./images/boom.png",
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
            "image" : "./images/maan.png",
            "solution": "aa",
            "question": "mn",
            "wholeAnswer": "maan",
            "answers": [
                "oo",
                "aa",
                "ee"
            ]
        },
        {
            "image" : "./images/sok.png",
            "solution": "o",
            "question": "sk", // not needed
            "wholeAnswer": "sok",
            "answers": [
                "e",
                "a",
                "i"
            ]
        }
    ]

    constructor(player: Player) {
        this.player = player
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
              //handle click
              // programma weet niet meer welke speler aan de beurt is
              console.log(this.player);
              if(this.player.turn == true) {
                // ja ik weet grootste poep oplossing ooit
                this.checkAnswer(event)
              } else {
                  this.player.turn = true;
              }
            })
        })
    }

    timeout(ms: any) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // get a question
    create() {
        //clean the modal
        this.cleanModal()
        this.chosenQ = Math.floor(Math.random() * 3);
        let question = this.questions[this.chosenQ]
        var showQuestion = question.wholeAnswer.replace(question.solution,'?');
        // insert question
        document.getElementById("question")?.innerText = showQuestion;

        document.getElementById("question-image").src = question.image;
        
        // insert modal
        document.getElementById("myModal").style.display = "block";
    }

    cleanModal() {
        // remove "correct"/"wrong" answer class html
        const modal = document.getElementById('modal');
        modal?.classList.remove('correct')
        modal?.classList.remove('incorrect')
        
        const questionText = document.getElementById('question');
        questionText?.classList.remove('visible');

        const message = document.getElementById('message');
        message?.classList.remove('visible');

        const answerDivs = [...document.querySelectorAll(".answer")];
        answerDivs.forEach((answerDiv) => {
            answerDiv.classList.remove('invisible')
        });

    }

    checkAnswer(e:any) {
        console.log('checkAnswer');
        let givenAnswer = e.target.innerText

        const question = this.questions[this.chosenQ]

        // remove questions
        const answerDivs = [...document.querySelectorAll(".answer")];
        answerDivs.forEach((answerDiv) => {
            answerDiv.classList.add('invisible')
        });

        // make message visible
        const message = document.getElementById('message');
        message.className = 'visible';

        // modal
        const modal = document.getElementById('modal');
        const messageStatus = question.wholeAnswer.replace(question.solution, givenAnswer.toLowerCase());
        const questionText = document.getElementById('question');
        questionText?.innerText = messageStatus
        if(givenAnswer.toLowerCase() == question.solution){
            message?.innerText = `Het is een ${messageStatus}!`
            modal?.classList.add('correct');
            console.log(this.player);
        } else {
            // show negative modal
            modal?.classList.add('incorrect');
            message?.innerText = `Het is geen ${messageStatus}!`
        }
        
        // remove modal
        this.timeout(4000).then(() => {
            // move
            document.getElementById("myModal").style.display = "none";

            // move 2 extra or not
            // console.log(this.player)
            this.player.move(2, true)
            this.player.setTurn()
        });
    }
}