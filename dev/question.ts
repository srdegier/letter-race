export class Question  { 

    div : HTMLElement[] = []
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

    constructor() {
        console.log('question');
        //document.querySelector('.answer')?.addEventListener("click", this.checkAnswer.bind(this));
        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', event => {
              //handle click
              this.checkAnswer(event)
            })
          })
    }

    // get a question
    create() {
        let random = Math.floor(Math.random() * 2);
        let question = this.questions[random]
        var showQuestion = question.wholeAnswer.replace(question.solution,'?');
        // insert question
        document.getElementById("question")?.innerText = showQuestion
        
        // insert modal
        document.getElementById("myModal").style.display = "block";
    }

    checkAnswer(e:any) {
        console.log(e.target.innerText);
        console.log(this.questions)
    }
}