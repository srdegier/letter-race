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
            }
        ];
        this.player = player;
        console.log('question');
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
                this.checkAnswer(event);
            });
        });
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    create() {
        var _a;
        this.cleanModal();
        this.chosenQ = Math.floor(Math.random() * 2);
        let question = this.questions[this.chosenQ];
        var showQuestion = question.wholeAnswer.replace(question.solution, '?');
        (_a = document.getElementById("question")) === null || _a === void 0 ? void 0 : _a.innerText = showQuestion;
        document.getElementById("question-image").src = question.image;
        document.getElementById("myModal").style.display = "block";
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
        if (givenAnswer.toLowerCase() == question.solution) {
            message === null || message === void 0 ? void 0 : message.innerText = `Het is een ${messageStatus}!`;
            modal === null || modal === void 0 ? void 0 : modal.classList.add('correct');
        }
        else {
            modal === null || modal === void 0 ? void 0 : modal.classList.add('incorrect');
            message === null || message === void 0 ? void 0 : message.innerText = `Het is geen ${messageStatus}!`;
        }
        this.timeout(4000).then(() => {
            document.getElementById("myModal").style.display = "none";
        });
    }
}
//# sourceMappingURL=question.js.map