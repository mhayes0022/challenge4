var timerEl = document.getElementById('countdown');
var timeLeft = 5;
var timeInterval;
var startBtn = document.getElementById('startBtn');
var menu = document.getElementById('menu');
var quiz = document.getElementById('quiz');
var questions = document.querySelector('questions');
var answers = document.querySelector('answers');
const A = document.getElementById('#answerA');
const B = document.getElementById('#answerB');
const C = document.getElementById('#answerC');
const D = document.getElementById('#answerD');





const quizQuestions = [
  {
    question: 'Which HTML element represents all of the visible content shown to the user?',
    A: 'The <head> element',
    B: 'The <meta> element',
    C: 'The <style> element',
    D: 'The <body> element',
    correct: 'The <body> element',
  },
  {
    question: 'What is a promise?',
    A: 'An object with an else method',
    B: 'An object with a then method',
    C: 'A method with a then object',
    D:  'An object with an if method',
    correct: 'An object with a then method',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
  {
    question: 'This is a question',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: '',
  },
]


function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = ' Time Remaining:' + ' ' + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = 'GAME OVER';
      clearInterval(timeInterval);
    }
  }, 1000);
}

startBtn.addEventListener('click', function(){
  countdown();
  quiz.classList.remove('hide');
  menu.classList.add('hide');
  timerEl.classList.remove('hide');
  askQuestion();
});


      function shuffleQuestions(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
          ];
        }
        return array;
      }

let randomQuestion = shuffleQuestions(quizQuestions);



// var arr = [2, 11, 37, 43];
// shuffleQuestions(arr);
// console.log(arr);
//console.log('hello');
console.log(randomQuestion);

function askQuestion() {
  let randomQuestion = shuffleQuestions(quizQuestions);
  let currentQuestion = randomQuestion;

  document.getElementById('answerA').innerHTML = currentQuestion.A;
  document.getElementById('answerB').innerHTML = currentQuestion.B;
  document.getElementById('answerC').innerHTML = currentQuestion.C;
  document.getElementById('answerD').innerHTML = currentQuestion.D;
 
}




  
  



//let playerScore = document.getElementById('player-score')