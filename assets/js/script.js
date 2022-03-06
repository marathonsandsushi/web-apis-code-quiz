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
let secondsRemaining = 70;
let quizInterval = null;

let highScores = [];
if (localStorage.highScores) {
  highScores = JSON.parse(localStorage.highScores);
}

// start quiz function
startQuiz = function () {
  quizInterval = setInterval(updateTime, 1000);
  askNextQuestion();
};

// this function will run every second
function updateTime() {
  if (secondsRemaining <= 0) {
    endQuiz();
  }
  secondsRemaining--;
  let timerEl = document.getElementById("timer-value");
  timerEl.innerHTML = "Time remaining:  " + secondsRemaining;
}

checkAnswer = function (button) {
  const clickChoice = button.innerHTML;
  const currentQuestion = questions[currentQuestionId];
  const answer = questions[currentQuestionId].answer;
  if (clickChoice === answer) {
  } else {
    secondsRemaining -= 15;
    updateTime();
  }
  currentQuestionId++;
  if (currentQuestionId >= questions.length || secondsRemaining <= 0) {
    endQuiz();
  } else {
    askNextQuestion();
  }
};

askNextQuestion = function () {
  const currentQuestion = questions[currentQuestionId];
  let qContent = document.getElementById("question-content");
  qContent.innerHTML = currentQuestion.question;
  for (j = 0; j < currentQuestion.choices.length; j++) {
    const elementName = "choice-" + j;
    let cContent = document.getElementById(elementName);
    cContent.innerHTML = currentQuestion.choices[j];
  }
};

endQuiz = function () {
  clearInterval(quizInterval);
  secondsRemaining = Math.max(0, secondsRemaining);
  questionsDiv.innerHTML = "";

  const createH2 = document.createElement("h2");
  createH2.setAttribute("id", "createH2");
  createH2.textContent = "All Done!";

  questionsDiv.appendChild(createH2);

  const scoreText = document.createElement("h2");
  scoreText.setAttribute("id", "scoreText");
  scoreText.textContent = "Your Score is:  " + secondsRemaining;

  questionsDiv.appendChild(scoreText);

  const initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("id", "initialsInput");
   document.body.appendChild(initialsInput);

  const initialsSubmit = document.createElement("button");
  initialsSubmit.innerHTML = "Submit";
  initialsSubmit.onclick = function () {
    const initials = initialsInput.value;
    uploadInitials(initials, secondsRemaining);
  };
  document.body.appendChild(initialsSubmit);
};

uploadInitials = function (initials, score) {
  highScores.push({
    initials: initials,
    score: score,
  });
  console.log("new score:  " + JSON.stringify(highScores));
  localStorage.highScores = JSON.stringify(highScores);
  window.location.replace("./highscores.html");
};

showHighscores = function () {
  const highScoreString = localStorage.highScores;
  console.log("highscores from local storage:  " + highScoreString);
  highScores = JSON.parse(highScoreString);
  const tableBodyEl = document.getElementById("playerData");

  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (let highScore of highScores) {
    const tableRow = document.createElement("tr");
    console.log(
      "player:  " + highScore.initials + "; Score:  " + highScore.score
    );
    const tableDataInitials = document.createElement("td");
    tableDataInitials.innerHTML = highScore.initials;
    tableRow.append(tableDataInitials);

    const tableDataScore = document.createElement("td");
    tableDataScore.innerHTML = highScore.score;
    tableRow.append(tableDataScore);
    tableBodyEl.appendChild(tableRow);
  }
};

// Madison Kendall Code Quiz
