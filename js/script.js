var secondsRemaining = 75;
var quizQuestions = document.getElementById("quizQuestions");
var quizAnswers = document.getElementById("quizAnswers");


function startQuiz() {
  var startQuiz = document.getElementById("start-quiz");
  var quizQuestions = document.getElementById("quiz-questions");
  if (startQuiz.style.display === "none") {
    startQuiz.style.display = "flex";
    quizQuestions.style.display = "none";
  } else {
    startQuiz.style.display = "none";
    quizQuestions.style.display = "flex";
  }

  var questionHeading = document.createElement("h1");
  questionHeading.className = "question";
  questionHeading.innerHTML = questionObject.question;
  quizQuestions.appendChild(questionHeading);


}

var questionObject = {
  question: "Commonly used data types DO Not Include:",
  answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  answer: "3. alerts",
}






// var quizQuestions 

// var time = document.getElementById("time");
//   timerOn = false, 
//   second = 2 * Math.PI / 60
//   start = 1.5 * Math.PI, 
//   t = 0, 
//   animation;

// time.addEventListener("click", function(){
//   if (!timerOn) {
//     timerOne = true;
//     animation = sertInterval(function()){
//       digital.innerHTML = Math.floor(t);
//     } (50);
//   }
//   else {
//     timerOne = false;
//     clearInterval(animation);
//   }
// };
