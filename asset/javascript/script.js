const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#ProgressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who won the 2018/2019 premier league?",
        choice1: "Manchester City",
        choice2: "Manchester United",
        choice3: "Chelsea",
        choice4: "Liverpool",
        answer: 1
    },
    {
        question: "Who won the Wimbeldon womens singles in 2021? ",
        choice1: "Johanna Konta",
        choice2: "Karolína Plíšková ",
        choice3: "Ashleigh Barty",
        choice4: "Serena Williams",
        answer: 3,
    },
    {
        question: "Who won the Rugby world cup in Japan?  ",
        choice1: "Australia",
        choice2: "South Africa",
        choice3: "England",
        choice4: "New Zealand",
        answer: 2,
    },
];

    const score_points = 100;
    const Max_Questions = 4;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    }

 getNewQuestion() = () => {
    if (availableQuestions.lenth === 0 || questionCounter > Max_Questions) {
     localStorage.setItem('mostrecentScore', score);

     return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter} of ${Max_Questions}`;
}