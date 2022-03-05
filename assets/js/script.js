// Hi! Welcome to my Web APIs Challenge: Code Quiz

// array of objects
let questions = [
  {
    question: "Commonly used data types DO not Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within  ____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commmas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log",
  },
];

currentQuestionId = 0;

// start quiz function
startQuiz = function () {
  console.log("I work");
  askNextQuestion();
};

// quiz questions function
askQuestions = function () {
  console.log("TBD 2");
  for (i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    console.log("Questions" + currentQuestion.question);
    let qContent = document.getElementById("question-content");
    qContent.innerHTML = currentQuestion.question;
    for (j = 0; j < currentQuestion.choices.length; j++) {
      console.log("Choice" + currentQuestion.choices[j]);
      const elementName = "choice-" + j;
      let cContent = document.getElementById(elementName);
      cContent.innerHTML = currentQuestion.choices[j];
    }
  }
  console.log("-------------------------------------");
};

checkAnswer = function(button) {
    // TODO check current answer
    const clickChoice = button.innerHTML;
    console.log("clickChoice" + clickChoice);
    // TODO check is there another question. And if not- then end quiz
    // else increment to nextQuestion
}

askNextQuestion = function () {
    const currentQuestion = questions[currentQuestionId];
    console.log("Questions" + currentQuestion.question);
    let qContent = document.getElementById("question-content");
    qContent.innerHTML = currentQuestion.question;
    for (j = 0; j < currentQuestion.choices.length; j++) {
      console.log("Choice" + currentQuestion.choices[j]);
      const elementName = "choice-" + j;
      let cContent = document.getElementById(elementName);
      cContent.innerHTML = currentQuestion.choices[j];
    }
}

/*
waitForChoice = function (currentQuestion) {
  console.log("ITS WORKING" + currentQuestion.question);
  prompt(currentQuestion.question);
  while(notAnswered)
};
*/


// TODO: create startTimer function
// TODO: create updateTimer function

// Madison Kendall Coding Quiz
