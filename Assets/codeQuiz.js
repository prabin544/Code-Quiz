var quiz = document.querySelector("#quiz");
var results = document.querySelector("#results");
var startquiz = document.querySelector("#startquiz");
var quesCount = 0;
var score = 0;
const Questions = [{
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "ESLint",
      b: "jQuery",
      c: "RequireJS",
    },
    correctAnswer: "ESLint"
  }
];

function buildQuiz() {
  // setTime();
  if (quesCount >= Questions.length){
    var result = document.getElementById("content");
    result.innerHTML = "You scored: " + score + "out of " + Questions.length;
  };
  setTime();
  // currQuestion = Questions[quesCount].question;
  var content = document.getElementById("content");
  var chA = Questions[quesCount].answers.a;
  var chB = Questions[quesCount].answers.b;
  var chC = Questions[quesCount].answers.c;
  answer = Questions[quesCount].correctAnswer;
  content.innerHTML = "";
  content.innerHTML = "<h1>" + Questions[quesCount].question + "<br/></h1>";
  content.innerHTML += "<div><button id = 'button1' onClick=checkAnswer(this) value='" + chA + "'>" + chA + "</button></div><br>";
  content.innerHTML += "<div><button id = 'button2' onClick=checkAnswer(this) value='" + chB + "'>" + chB + "</button></div><br>";
  content.innerHTML += "<div><button id = 'button3' onClick=checkAnswer(this) value='" + chC + "'>" + chC + "</button></div><br>";
  quesCount++;
}

function checkAnswer(e) {
  
  var clicked = document.getElementById(e.id).value;
  console.log(clicked);
  console.log(answer);
  if (clicked === answer) {
    score++
  };
  console.log(score);
  buildQuiz();
}

var secondsLeft = 10;

function setTime() {
  var timerInterval = window.setInterval(function () {
    secondsLeft--;
    var Elspt = document.getElementById("time");
    Elspt.innerHTML += secondsLeft + " seconds left till Quiz Ends.";
 
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  var content = document.getElementById("content");
  content.innerHTML = "Times Up!";
  var result = document.getElementById("content");
  result.innerHTML = "You scored: " + score + "out of " + Questions.length;
}

startquiz.addEventListener('click', buildQuiz);