const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = countdown.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds

    countdown.innerHTML = '${minutes}: ${seconds}';
    time --;
}

/*
const myQuestions = [
    {
        question: "Commonly used data types DO not Include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed with ___",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            a: "commmas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console log"
        },
        correctAnswer: "d"
    },

]

const timerEl = document.querySelector("#timer");





function buildQuiz(){
 // variable to store the HTML output
 const output = [];

 // for each question
 myQuestions.forEach(
     (currentQuestion, questionNumber) => {
         
        // variable to store the list of possible answers 
        const answers = [];

        // and for each available answer 
        for(letter in currentQuestion.answers){

            // add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
    
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }




function showResults(){

}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults); 
*/