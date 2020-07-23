var quiz = document.querySelector("#quiz");
var results = document.querySelector("#results");
var startquiz = document.querySelector("#startquiz");
var quesCount =0;

const Questions = [
    {
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

function buildQuiz(){
    // setTime();
    question = Questions[quesCount].question;
    var content = document.getElementById("content");
    chA=Questions[quesCount].answers.a;
    chB=Questions[quesCount].answers.b;
    chC=Questions[quesCount].answers.c;
    answer = Questions[quesCount].correctAnswer;
    content.innerHTML="";
    content.innerHTML = "<h1>" + Questions[quesCount].question + "<br/></h1>";
    content.innerHTML += "<div><button id = 'button1' onClick=checkAnswer(this) value='" + chA + "'>" +chA+ "</button></div><br>";
    content.innerHTML += "<div><button id = 'button2' onClick=checkAnswer(this) value='" + chB + "'>" +chB+"</button></div><br>";
    content.innerHTML += "<div><button id = 'button3' onClick=checkAnswer(this) value='" + chC + "'>" +chC+"</button></div><br>";
    quesCount++;
} 

var score = 0;
function checkAnswer(e){

for(var i = 0; i < Questions.length; i++){
  clicked = document.getElementById(e.id).value;
  console.log(clicked);
  console.log(answer);
  if(clicked === answer){
    score++
  };
  console.log(score);
  buildQuiz();
};
showResults();
}

function showResults(){
  console.log(Questions.length)
  var content = document.getElementById("content");
  content.innerHTML="You scored: " + score + "out of " + Questions.length ;
}

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  var content = document.getElementById("content");
  var timeEl = document.createElement("div");
  timeEl.textContent = secondsLeft + " seconds left till Quiz Ends.";
  content.innerHTML=timeEl;
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }

  }, 1000);
}

function sendMessage() {
  var content = document.getElementById("content");
  content.innerHTML="Times Up!";
}

startquiz.addEventListener('click', buildQuiz);
