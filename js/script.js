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
      "1. JavaScripty",
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


function startQuiz() {

  var timerElement = document.getElementById('timer');
  timerElement.innerHTML = "Time: " + seconds;
  var secondsCounter = setInterval(function(){
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

  quizAnswers = document.createElement("div");
  quizAnswers.className = "answer-wrapper";
  quizAnswers.setAttribute("id","quiz-answers");
  
  questionHeading = document.createElement("h1");
  questionHeading.className = "question";
  quizQuestions.appendChild(questionHeading);
  quizQuestions.appendChild(quizAnswers);

  questionBuilder();
}

function subtractSeconds() {
    seconds = seconds - 10;
}

// builds question box on each page
function questionBuilder() {
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
function checkQuestion() {
  var notification = "CORRECT!";
  var userAnswer = document.getElementById(this.id).innerText;
  var answer = questions[questionsIndex - 1].answer;
  console.log("userAnswer is ", userAnswer);
  console.log("answer is ", answer);

  var isEqual = userAnswer === answer;
  console.log(isEqual);
  if (!isEqual) {
    subtractSeconds();
    notification = "INCORRECT!"
  }

  document.getElementById("notification").innerText = notification;

  // alert(this.id);// how to check which button id called this function
  questionBuilder();


  


}





