var seconds = 75;
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers");
var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  },
  {
  	question: "The condition in an if/else statement is enclosed with ______.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets"
    ],
    answer: "2. curly brackets"
  },
  {
  	question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: "4. all of the above"
  },
  {
  	question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      "1. commas",
      "2. curly backets",
      "3. quotes",
      "4. parenthesis"
    ],
    answer: "3. quotes"
  },
  {
  	question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log"
    ],
    answer: "4. console.log"
  }
]
var questionsIndex = 0;
var questionHeading = "";
var quizAnswers = "";
var notificationHeading = "";
var endGame = document.getElementById("end-game");
var highScores = [];
var secondsCounter;


function startQuiz() {

  var timerElement = document.getElementById('timer');
  timerElement.innerHTML = "Time: " + seconds;
  secondsCounter = setInterval(function(){
    seconds = seconds - 1;
    timerElement.innerHTML = "Time: " + seconds;
    if (seconds === 0){
      clearInterval(secondsCounter);
    }
  }, 1000);


  var startQuiz = document.getElementById("start-quiz");
  if (startQuiz.style.display === "none") {
    startQuiz.style.display = "flex";
    quizQuestions.style.display = "none";
  } else {
    startQuiz.style.display = "none";
    quizQuestions.style.display = "flex";
  }

  // creates div for quizAnswers to go in
  quizAnswers = document.createElement("div");
  quizAnswers.className = "answer-wrapper";
  quizAnswers.setAttribute("id","quiz-answers");
  // creates h1 that holds the question
  questionHeading = document.createElement("h1");
  questionHeading.className = "question";
  // attaches the h1 and the div to the quizQuestions div
  quizQuestions.appendChild(questionHeading);
  quizQuestions.appendChild(quizAnswers);

  questionBuilder();
}

function subtractSeconds() {
    seconds = seconds - 10;
}

// builds question box on each page
function questionBuilder() {
  //clears out the children of the previous questions
  document.getElementById("quiz-answers").innerHTML = "";
  questionHeading.innerHTML = questions[questionsIndex].question;
// this for loop is for the answer array for each question
  for ( var i = 0; i < questions[questionsIndex].answers.length; i++ ) {
    var answerOption = document.createElement("button");
    answerOption.className = "answer-btn hover";
    answerOption.setAttribute("id", "btn" + i);
    answerOption.innerHTML = questions[questionsIndex].answers[i];
    answerOption.onclick = checkQuestion;
    quizAnswers.appendChild(answerOption);
  }
  questionsIndex++; 
}

// check to see if answer matches option selected by user
// needs to pull up the next question (call questionBuilder above)
// display if previous question was right or wrong 
// if answer is wrong call subtractSeconds
// this.id is the id of the button that was clicked--changes each time
function checkQuestion() {
  var notification = "CORRECT!";
  var userAnswer = document.getElementById(this.id).innerText;
  var previousQuestionsIndex = questionsIndex - 1;
  var answer = questions[previousQuestionsIndex].answer;

  notificationHeading = document.createElement("h1");
  notificationHeading.className = "notification";
  notificationHeading.setAttribute("id", "notification");

  var isEqual = userAnswer === answer;
  if (!isEqual) {
    subtractSeconds();
    notification = "INCORRECT!"
  }

  document.getElementById("notification").innerText = notification;
  var iHaveMoreQuestions = questionsIndex < questions.length;
  // alert(this.id);// how to check which button id called this function
  if (iHaveMoreQuestions) {
    questionBuilder();  
  } else {
    clearInterval(secondsCounter);
    // go to enter score page
    document.querySelector(".quiz-container").style.display="none";
    endGame.classList.remove("hide");
    var highScore = document.getElementById("high-score");
    highScore.innerHTML = "Your high score is " + seconds;
  }
}

function submitInitials() {
  // highScoreList.classList.remove("hide");
  var inputInitials = document.getElementById("inputInitials").value;
  var scoreInitials = {
    initials: inputInitials, 
    score: seconds
  };
  console.log(scoreInitials);
// onclick of submit reroute to high scores page
  highScores.push(scoreInitials);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  scoreTracker();
}

function goBack() {
  startQuiz();
  highScoreList.classList.remove("hide");
}

function clearHighScores() {
  localStorage.clear();
  document.getElementById("score-container").innerHTML = "";

}

function scoreTracker() {
  var endGame = document.getElementById("end-game");
  endGame.classList.add("hide");
  var scoreTracker = document.getElementById("scoreTracker");
  scoreTracker.classList.remove("hide");
  var scoreList = localStorage.getItem("highScores", highScores);
  var scoreListJSON = JSON.parse(scoreList);
  console.log("scoreList is: ", scoreList[0]);
  console.log(typeof scoreList);
  console.log(scoreListJSON[0]);
  var scoreContainer = document.getElementById("score-container");


  for ( var i = 0; i < scoreListJSON.length; i++ ) {
    var score = document.createElement("div");
    score.className = "score-tracker";
    score.innerHTML = (i + 1) + ". " + scoreListJSON[i].initials + " - " + scoreListJSON[i].score;
    scoreContainer.appendChild(score);
  }
}




