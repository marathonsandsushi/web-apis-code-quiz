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
let secondsRemaining = 60;
let quizInterval = null;
let highScores = [];

// start quiz function
startQuiz = function () {
  console.log("I work");
  quizInterval = setInterval(updateTime, 1000);
  askNextQuestion();
};

// this function will run every second
function updateTime() {
    if(secondsRemaining <= 0) {
        endQuiz();
    }
    secondsRemaining--;
    console.log("timer is working" + secondsRemaining);
    let timerEl = document.getElementById("timer-value");
    timerEl.innerHTML = "Time remaining:  " + secondsRemaining;
 }
 
checkAnswer = function(button) {
    // TODO check current answer
    const clickChoice = button.innerHTML;
    console.log("clickChoice" + clickChoice);
    const currentQuestion = questions[currentQuestionId];
    const answer = questions[currentQuestionId].answer;
    if(clickChoice === answer) {
        console.log("correct answer");
    } else {
        console.log("wrong");
        secondsRemaining -= 10;
        updateTime();
    } 
    currentQuestionId++;
    if(currentQuestionId >= questions.length || secondsRemaining <= 0){
        endQuiz();
    } else {
        askNextQuestion();
    }
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

endQuiz = function (){
    clearInterval(quizInterval);
    console.log("TBD");
    questionsDiv.innerHTML = "";
    
     const createH2 = document.createElement("h2");
     createH2.setAttribute("id", "createH2");
     createH2.textContent = "All Done!"
 
     questionsDiv.appendChild(createH2);

     const scoreText = document.createElement("h2");
     scoreText.setAttribute("id", "scoreText");
     scoreText.textContent = "Your Score is -  " + secondsRemaining;
 
     questionsDiv.appendChild(scoreText);

     const initialsInput = document.createElement("input");
     initialsInput.setAttribute("type", "text");
    // initialsInput.setAttribute("value", "Hello World!");
     document.body.appendChild(initialsInput);

     const initialsSubmit = document.createElement("button");
     initialsSubmit.onclick = function(){
         uploadInitials(initialsInput.innerHTML);
      };
     document.body.appendChild(initialsSubmit);

}

    uploadInitials = function(initials) {
        this.highScores.push({
            "initials"; initials,
            "score"; score,
        });
    }

// Madison Kendall Coding Quiz
