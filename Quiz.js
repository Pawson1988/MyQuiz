
const questionShow = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const scoreDisplay = document.querySelector(".scoreDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const startButton = document.querySelector(".startButton");
const answers = document.querySelectorAll(".answer");
const nextButton = document.querySelector(".nextButton");


class Question {
    constructor(question, answerA, answerB, answerC, answerD, correctAnswer){
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
    }

    showQuestion(){

        questionShow.textContent = this.question;
        answer1.textContent = this.answerA;
        answer2.textContent = this.answerB;
        answer3.textContent = this.answerC;
        answer4.textContent = this.answerD;
        resultDisplay.textContent = this.correctAnswer;
        
    }
}

const question1 = new Question(
   "How many seasons are there?",
    1,
    2,
    3,
    4,
    4
);

const question2 = new Question(
    "What is the capital city of France?",
    "London",
    "Rome",
    "Paris",
    "Madrid",
    "Paris"
)

const question3 = new Question(
    "How old is james?",
    25,
    45,
    67,
    32,
    32
)

let questionNumber = 0;
let score = 0;
const questions = [];


function incrementQuestionNumber(){
    questionNumber = questionNumber + 1;
}

// to move to the next question in the array. 

function goToNextQuestion(){
    incrementQuestionNumber();
    questions[questionNumber].showQuestion();
}

nextButton.addEventListener("click", goToNextQuestion);

// to set the quiz up initially

function startQuiz(){
    questionNumber = 0;
    score = 0;
    addNewQuestions();
    // let randomNum1 = randomNum();
    questions[questionNumber].showQuestion();
}

startButton.addEventListener("click", () => {
    startQuiz();
})

//to check whether the question is correct or not
function checkQuestion(){

    resultDisplay.style.display = "block";

    if(this.textContent === resultDisplay.textContent){
        resultDisplay.textContent = "well done!";
        incrementScore();
    } else {
        resultDisplay.textContent = "Try Again!"
    }
}


// to loop through the answer, once an answer is clicked it will then be checked by the abover function (checkQuestion)
for(let answer of answers){
    answer.addEventListener("click", checkQuestion);
}


//to add the questions to the array for when the quiz starts
function addNewQuestions() {
    questions.push(question1, question2, question3)
}


function changeScoreDisplay(){
    scoreDisplay.textContent = score;
}

function incrementScore() {
   score = score + 1;
    changeScoreDisplay();
}





