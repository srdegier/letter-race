export class Question {
    constructor() {
        this.div = [];
        this.questions = [
            {
                "image": "",
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
                "image": "",
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
        console.log('question');
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
                this.checkAnswer(event);
            });
        });
    }
    create() {
        var _a;
        let random = Math.floor(Math.random() * 2);
        let question = this.questions[random];
        var showQuestion = question.wholeAnswer.replace(question.solution, '?');
        (_a = document.getElementById("question")) === null || _a === void 0 ? void 0 : _a.innerText = showQuestion;
        document.getElementById("myModal").style.display = "block";
    }
    checkAnswer(e) {
        console.log(e.target.innerText);
        console.log(this.questions);
    }
}
//# sourceMappingURL=Question.js.map