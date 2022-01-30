

const areYouReady = document.querySelector(".AreYouReady")

function startQuiz() {
    areYouReady.innerHTML = ""
};


/*let score = 0;
let highscore = 0;*/

const myQuestions= [
    {
        question1: "have Leicester city won the premier league?",
        answers:{
            a: "true",
            b: "false"
        },
        correctAnswer: "true"
    },
    {
        question2: "Has Andy Murray won an olympic gold medal?",
        answers:{
            a: "true",
            b: "false"
    },
    correctAnswer: "true"
     },
    {
     question3: "Are Luton town in the premier league?",
        answers:{
            a: "true",
            b: "false"
        },
        correctAnswer: "false"
    }]

    
 



