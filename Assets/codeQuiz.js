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
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

function buildQuiz(){
    
    question = Questions[quesCount].question;
    var content = document.getElementById("content");
    chA=Questions[quesCount].answers.a;
    chB=Questions[quesCount].answers.b;
    chC=Questions[quesCount].answers.c;
    content.innerHTML="";
    content.innerHTML = "<h1>" + Questions[quesCount].question + "<br/></h1>";
    // content.innerHTML += "<button>a: "+ chA + "<br></button>";
    // content.innerHTML += "<button>b: "+ chB + "<br></button>";
    // content.innerHTML += "<button>c: "+ chC + "<br></button>";
    // content.innerHTML += "<label><button id = 'a' class= 'choices value='" + chA + "'</button></label><br>";
    content.innerHTML += "<div><button id = 'a' class= 'choices' value='" + chA + "'>" +chA+"</button></div><br>";
    content.innerHTML += "<div><button id = 'b' class= 'choices' value='" + chB + "'>" +chB+"</button></div><br>";
    content.innerHTML += "<div><button id = 'c' class= 'choices' value='" + chC + "'>" +chC+"</button></div><br>";
    quesCount++;
    checkAnswer();
} 

function checkAnswer(){
  
}


function showResults(){
  console.log(Questions.length)
}

startquiz.addEventListener('click', buildQuiz);
