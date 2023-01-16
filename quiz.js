const quizData = [
    {
        question: "HTML stands for -",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        correct: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does JS stand for?",
        a: "JavaScript",
        b: "JavaScreen",
        c: "JustSaver",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is correct about JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: "What type of CSS is generally recommended for designing large web pages?",
        a: "Inline",
        b: "External",
        c: "Internal",
        d: "None of the mentioned",
        correct: "b",
    },
    {
        question: "How can we select an element with a specific ID in CSS?",
        a: "#",
        b: ".",
        c: "^",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: " Which of the following are valid ways to represent a colour in CSS?",
        a: "a valid color name",
        b: "RGB values",
        c: "Hex values",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following property specifies the look and design of an outline?",
        a: "Outline-style",
        b: "Outline",
        c: "Outline-font",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: "How can we change the background color of an element?",
        a: "background-color",
        b: "color",
        c: "both a and b",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})