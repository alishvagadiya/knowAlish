var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log('welcome ' + userName + ' to DO YOU KNOW Alish?');
var questions = [
  {
    question: "Am I older than 25? ",
    answer: "yes"
  },{
    question: "where do i live? ",
    answer: "Bangalore"
  }
];
var score = 0;

for(var i = 0; i< questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your total score is - " + score + ' ');

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log('correct answer');
    score = score + 1;
  } else {
    console.log('wrong answer');
  }
  console.log("Your current score is - " + score);
  console.log('**********************************************');
}