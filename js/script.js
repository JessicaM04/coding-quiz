var seconds = 75;
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers");


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

  var quizAnswers = document.createElement("div");
  quizAnswers.className = "answer-wrapper";
  
  var questionHeading = document.createElement("h1");
  questionHeading.className = "question";
  questionHeading.innerHTML = questionObject.question;
  quizQuestions.appendChild(questionHeading);
  quizQuestions.appendChild(quizAnswers);

   // for loop for questions and answers //
   for ( var i = 0; i < questionObject.answers.length; i++ ) {
    console.log("my answer is ", questionObject.answers[i]);
    var answerOption = document.createElement("button");
    answerOption.className = "answer-btn hover";
    answerOption.setAttribute("id", "btn" + i);
    answerOption.innerHTML = questionObject.answers[i];
    answerOption.onclick = // fill in function name //
    quizAnswers.appendChild(answerOption);
  }
}
// make function to load questions //

var questionObject = {
  question: "Commonly used data types DO Not Include:",
  answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  answer: "3. alerts"
}


function subtractSeconds() {
    seconds = seconds - 10;
}


// need a function to build questions that takes in a question object
function questionBuilder(question) {


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
