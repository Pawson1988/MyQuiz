
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
const gameOverMsg = document.querySelector(".gameOverMsg");


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

const question4 = new Question(
    "He _____ eating his lunch at 1pm yesterday",
    "is",
    "was",
    "were",
    "when",
    "was"
)

let questionNumber = 0;
let score = 0;
let questions = [];


function incrementQuestionNumber(){
    questionNumber = questionNumber + 1;
}

// to move to the next question in the array. 

function goToNextQuestion(){
    incrementQuestionNumber();
    questions[questionNumber].showQuestion();
    resultDisplay.style.display = "none";
}

nextButton.addEventListener("click", goToNextQuestion);

// to set the quiz up initially

function startQuiz(){
    questions = [];
    questionNumber = 0;
    score = 0;
    changeScoreDisplay();
    resultDisplay.textContent = undefined;
    resultDisplay.style.display = "none";
    gameOverMsg.textContent = undefined;
    addNewQuestions();
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
        if (questionNumber + 1 === questions.length){
            gameOverMsg.textContent = `Quiz finished, you scored ${score} out of ${questions.length}`;
        }
    } else {
        resultDisplay.textContent = "Try Again!";
            if (questionNumber + 1 === questions.length){
            gameOverMsg.textContent = `Quiz finished, you scored ${score} out of ${questions.length}`;
        }
    }
}


// to loop through the answer, once an answer is clicked it will then be checked by the abover function (checkQuestion)
for(let answer of answers){
    answer.addEventListener("click", checkQuestion);
}


//to add the questions to the array for when the quiz starts
function addNewQuestions() {
    questions.push(question1, question2, question3, question4)
}


function changeScoreDisplay(){
    scoreDisplay.textContent = score;
}

function incrementScore() {
   score = score + 1;
    changeScoreDisplay();
}





