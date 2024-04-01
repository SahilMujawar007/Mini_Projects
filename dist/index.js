const questions = [
    {
        question : "Which of the following can read and render HTML web pages.",
        answers : [
            {text:"Server", correct: false},
            {text:"Head Tak", correct: false},
            {text:"Web browser", correct: true},
            {text:"Empty", correct: false},
        ]
    },
    {
        question : " The latest HTML standard is",
        answers : [
            {text:"HTML 4.0", correct: false},
            {text:"HTML 5.0", correct: true},
            {text:"XML", correct: false},
            {text:"SGML", correct: false},
        ]
    },
    {
        question : " Simple network management protocol uses which of the following port number",
        answers : [
            {text:"164", correct: false},
            {text:"163", correct: false},
            {text:"160", correct: false},
            {text:"161", correct: true},
        ]
    },
    {
        question : "Which of the following is used to transmit information on the world wide web?",
        answers : [
            {text:"HPPT", correct: false},
            {text:"HTTP", correct: true},
            {text:"HTTTP", correct: false},
            {text:"HTPP", correct: false},
        ]
    },
    {
        question : "How many sizes of headers are available in HTML by default?",
        answers : [
            {text:"5", correct: false},
            {text:"3", correct: false},
            {text:"6", correct: true},
            {text:"1", correct: false},
        ]
    },
    {
        question : "What is Document Object Model(DOM)?",
        answers : [
            {text:"A coding style", correct: false},
            {text:"Specification", correct: false},
            {text:"A parser", correct: true},
            {text:"None", correct: false},
        ]
    },
    {
        question : "Identify the total standard color names that HTML supports.",
        answers : [
            {text:"30", correct: false},
            {text:"70", correct: false},
            {text:"140", correct: true},
            {text:"120", correct: false},
        ]
    },
    {
        question : "Identify the tag used to give paragraph.",
        answers : [
            {text:"< P >", correct: true},
            {text:"< br >", correct: false},
            {text:"< maequee >", correct: false},
            {text:"< pre >", correct: false},
        ]
    },
    {
        question : "Identify the function in JavaScript which is used to send messages to users requesting for text input?",
        answers : [
            {text:"alert()", correct: false},
            {text:"prompt()", correct: true},
            {text:"display()", correct: false},
            {text:"getInput()", correct: false},
        ]
    },
    {
        question : "Which of the following is used to allocate and manage resources for a network?",
        answers : [
            {text:"Bluetooth", correct: false},
            {text:"Server", correct: true},
            {text:"Node", correct: false},
            {text:"None of the above", correct: false},
        ]
    },
]

const questionEl = document.getElementById('question');
const answerBtn = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn');
const scoreValue = document.getElementById("score");
const quelength = document.getElementById("quelength")


let currentQueIndex = 0;
let score = 0;


function startQuiz () {
    currentQueIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {

    resetState();

    let currentQuestion = questions[currentQueIndex];
    let questionNo = currentQueIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener('click', selecteAns)
    })
}

function resetState () {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selecteAns (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextBtn.style.display = "block";
    nextBtn.style.margin = "auto"
}


function showScore() {
    questionEl.innerHTML ="All Questions are completed"
    answerBtn.innerHTML = ""
    scoreValue.innerHTML = ` ${score}`;
    quelength.innerHTML = ` ${questions.length} `;
    nextBtn.innerHTML = "Restart Quiz"
    nextBtn.style.display ="block";

}

function handleNextBtn() {
    currentQueIndex++;
    if(currentQueIndex < questions.length) {
        showQuestion();
    }else {
        showScore();    
    }
}

nextBtn.addEventListener('click', () => {
    if(currentQueIndex < questions.length) {
        handleNextBtn();
    }else {
        startQuiz();
        scoreValue.innerHTML = ` `;
        quelength.innerHTML = ` `;
    }
})

startQuiz();