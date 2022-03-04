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

var startTime = document.getElementById("#startTime");

// start game function 
startQuiz = function (){
    console.log("I work");
    resetDom();
    askQuestions();

}

resetDom = function() {
    console.log("TBD");
}

askQuestions = function() {
    console.log("TBD 2");
    for(i=0; i< questions.length; i++){
        console.log("Questions" + questions[i].question);
    }
}
// Madison Kendall Coding Quiz
