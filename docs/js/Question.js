export class Question {
    constructor(player) {
        this.div = [];
        this.questions = [
            {
                "image": "./images/boom.png",
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
                "image": "./images/maan.png",
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
                "image": "./images/sok.png",
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
                "image": "./images/raam.png",
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
                "image": "./images/doos.png",
                "solution": "oo",
                "question": "ds",
                "wholeAnswer": "doos",
                "answers": [
                    "ee",
                    "oo",
                    "aa"
                ]
            }
        ];
        this.player = player;
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
                console.log(this.player);
                if (this.player.turn == true) {
                    this.checkAnswer(event);
                }
                else {
                    this.player.turn = true;
                }
            });
        });
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    create() {
        var _a;
        this.cleanModal();
        this.chosenQ = Math.floor(Math.random() * 5);
        let question = this.questions[this.chosenQ];
        var showQuestion = question.wholeAnswer.replace(question.solution, '?');
        (_a = document.getElementById("question")) === null || _a === void 0 ? void 0 : _a.innerText = showQuestion;
        document.getElementById("question-image").src = question.image;
        document.getElementById("myModal").style.display = "block";
        const answerDivs = [...document.querySelectorAll(".answer")];
        for (const [index, answer] of answerDivs.entries()) {
            answer.innerHTML = question.answers[index];
            console.log(question.answers[index]);
        }
    }
    cleanModal() {
        const modal = document.getElementById('modal');
        modal === null || modal === void 0 ? void 0 : modal.classList.remove('correct');
        modal === null || modal === void 0 ? void 0 : modal.classList.remove('incorrect');
        const questionText = document.getElementById('question');
        questionText === null || questionText === void 0 ? void 0 : questionText.classList.remove('visible');
        const message = document.getElementById('message');
        message === null || message === void 0 ? void 0 : message.classList.remove('visible');
        const answerDivs = [...document.querySelectorAll(".answer")];
        answerDivs.forEach((answerDiv) => {
            answerDiv.classList.remove('invisible');
        });
    }
    checkAnswer(e) {
        console.log('checkAnswer');
        let givenAnswer = e.target.innerText;
        const question = this.questions[this.chosenQ];
        const answerDivs = [...document.querySelectorAll(".answer")];
        answerDivs.forEach((answerDiv) => {
            answerDiv.classList.add('invisible');
        });
        const message = document.getElementById('message');
        message.className = 'visible';
        const modal = document.getElementById('modal');
        const messageStatus = question.wholeAnswer.replace(question.solution, givenAnswer.toLowerCase());
        const questionText = document.getElementById('question');
        questionText === null || questionText === void 0 ? void 0 : questionText.innerText = messageStatus;
        let answerCheck = true;
        if (givenAnswer.toLowerCase() == question.solution) {
            message === null || message === void 0 ? void 0 : message.innerText = `Het is een ${messageStatus}!`;
            modal === null || modal === void 0 ? void 0 : modal.classList.add('correct');
            console.log(this.player);
        }
        else {
            answerCheck = false;
            modal === null || modal === void 0 ? void 0 : modal.classList.add('incorrect');
            message === null || message === void 0 ? void 0 : message.innerText = `Het is geen ${messageStatus}!`;
        }
        this.timeout(4000).then(() => {
            document.getElementById("myModal").style.display = "none";
            if (answerCheck) {
                this.player.move(2, true);
            }
            this.player.setTurn();
        });
    }
}
//# sourceMappingURL=question.js.map