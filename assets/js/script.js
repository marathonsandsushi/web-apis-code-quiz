// Hi! Welcome to my Web APIs Challenge: Code Quiz

let questions = [
   {
       question: "Commonly used data types DO not Include:",
       choices:["strings", "booleans", "alerts", "numbers"],
       answer: "alerts"
   },
   {
       question: "The condition in an if / else statement is enclosed within  ____.",
       choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
       answer: "curly brackets"
   },
   {
       question: "Arrays in JavaScript can be used to store ____.",
       choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
       answer: "all of the above"
   },
   {
       question: "String values must be enclosed within ____ when being assigned to variables.",
       choices: ["commmas", "curly brackets", "quotes", "parenthesis"],
       answer: "quotes"
   },
   {
       question: "A very useful tool used during development and debugging for printing content to the debugger is:",
       choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
       answer: "console log"
   }
]

// button id is startButton
var startButton = document.getElementById("#startButton");
var questionsDiv = document.getElementById("questionsDiv");

// start quiz function 
startQuiz = function (){
    console.log("I work");
    resetDom();
    askQuestions();

}

// reset the dom function. Will run after start quiz button is hit (startQuiz function runs)
resetDom = function() {
    console.log("TBD");
    questionsDiv.innerHTML = "";
    askQuestions();

}

// quiz questions function
askQuestions = function() {
    console.log("TBD 2");
    for(i=0; i< questions.length; i++){
        const currentQuestion = questions[i];
        console.log("Questions" + currentQuestion.question)
         //To Do: make questions show up in html
        for(j=0; j< currentQuestion.choices.length; j++) {
            console.log("Choice" + currentQuestion.choices[j]);
             //To Do: make choices show up in html
        }
    }
    console.log("-------------------------------------");
}

// check answers
/*
checkAnswer = function() {
    if(currentQuestion.question)
};
*/
// TODO: create startTimer function
// TODO: create updateTimer function



// Madison Kendall Coding Quiz
