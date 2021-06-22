import { Player } from "./player";

export class Question  { 

    div : HTMLElement[] = []
    chosenQ: number
    player: Player
    questions: object = [
        {
            "image" : "./images/boom.png",
            "solution": "oo",
            "question": "bm",
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
            "question": "sk", 
            "wholeAnswer": "sok",
            "answers": [
                "e",
                "o",
                "i"
            ]
        },
         {
            "image" : "./images/raam.png",
            "solution": "aa",
            "question": "rm",
            "wholeAnswer": "raam",
            "answers": [
                "oo",
                "ee",
                "aa"
            ]
        },
        {
            "image" : "./images/doos.png",
            "solution": "oo",
            "question": "ds",
            "wholeAnswer": "doos",
            "answers": [
                "ee",
                "oo",
                "aa"
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
        this.chosenQ = Math.floor(Math.random() * 5);
        let question = this.questions[this.chosenQ]
        var showQuestion = question.wholeAnswer.replace(question.solution,'?');
        // insert question
        document.getElementById("question")?.innerText = showQuestion;

        document.getElementById("question-image").src = question.image;
        
        // insert modal
        document.getElementById("myModal").style.display = "block";

        // insert answers
        const answerDivs = [...document.querySelectorAll(".answer")];
        for (const [index, answer] of answerDivs.entries()) {
            answer.innerHTML = question.answers[index]
            console.log(question.answers[index])
        }
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
        let answerCheck = true
        if(givenAnswer.toLowerCase() == question.solution){
            
            message?.innerText = `Het is een ${messageStatus}!`
            modal?.classList.add('correct');
            console.log(this.player);
            // Plays sound if player gives a right answer
            const rightAnswer = new Audio('./sounds/right_answer.mp3');
            rightAnswer.play();
        } else {
            // show negative modal
            answerCheck = false
            modal?.classList.add('incorrect');
            message?.innerText = `Het is geen ${messageStatus}!`
            const wrongAnswer = new Audio('./sounds/wrong_answer.mp3');
            wrongAnswer.play();
        }
        
        // remove modal
        this.timeout(4000).then(() => {
            // move
            document.getElementById("myModal").style.display = "none";

            // move 2 extra or not
            // console.log(this.player)
            if(answerCheck){
                this.player.move(2, true)
            }
            
            this.player.setTurn()
        });
    }
}