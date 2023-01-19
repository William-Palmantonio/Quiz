const quizData = [
    {
        question: 'Who won the 2022 World Cup?',
        a:'Argentina',
        b:'Brazil',
        c:'England',
        d:'Italy',
        correct: 'a'
    }, {
        question: 'Who won the 2018 World Cup?',
        a:'England',
        b:"France",
        c:'South Africa',
        d:'USA',
        correct:'b'
    }, {
        question:'Who won the 2014 Corld Cup ?',
        a:'China',
        b:'Spain',
        c:'Germany',
        d:'Sudan',
        correct:'c'
    }, {
        question:'Who won the 2010 World Cup?',
        a:'Ghana',
        b:'France',
        c:'Portugal',
        d:'Spain',
        correct:'d'
    }, {
        question:'Who country has never won a World Cup?',
        a:'Netherland',
        b:'England',
        c:'Italy',
        d:'Germany',
        correct:'a'
    }
];


const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById
("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById
("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];


    questionE1.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].
        correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at 
            ${score}/${quizData.length} question.</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});


