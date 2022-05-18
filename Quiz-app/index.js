const quizData = [
    {
        question: "Martha ,Mary, May, Made Marvelous Milk. In that sentence who made the milk? This is an easy and dumb question!",
        a: "martha",
        b: "may",
        c: "martha, mary, may",
        d: "may",
        correct: "c"
    }, {
        question: "Think Of your favorite animal, place, and color now say one of them! What Did you say?",
        a: "Animal",
        b: "Place",
        c: "Color",
        d:"One of them",
        correct:"d"

    }, {
        question: "3 people go onto a bus, 3 people came off, 6 people came on and 3 more people come on. How many people are in the bus if 3 more came on?",
        a: "8",
        b: "6",
        c: "12",
        d: "3",
        correct:"c"
    }, {
        question: "Let us say you eat half of a waffle and then eat another half how much have you eaten if you have eaten none?",
        a: "1/2",
        b: "1",
        c: "None",
        d: "0",
        correct:"d"

    }, {
        question: "what year was javascript founded",
        a: "2012",
        b: "1996",
        c: "1994",
        d: "1995",
        correct: "d"
    }
]

 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const question = document.getElementById("question");
 const submitBtn = document.getElementById("submit")
 const answerEls = document.querySelectorAll(".answer")
 const quiz = document.getElementById("quiz")

let currentQuestion = 0;
let score = 0

loadQuiz()


function loadQuiz() {
    deSelect();
    const currentQuizData = quizData[currentQuestion]
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
   
}

function getSelected() {
    
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

    
}
submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `<h2>You answered ${score} questions correctly out of ${quizData.length}</h2><button onclick="location.reload()">Reload</button>`
    }}
    
})


