let timerEl = document.getElementById('countdown');
let timeLeft = 30;
let timeInterval;
let startBtn = document.getElementById('startBtn');
let menu = document.getElementById('menu');
let quiz = document.getElementById('quiz');
let questions = document.querySelector('questions');
let index = 0;
let answersBtns = document.getElementById('answerBtns');
const A = document.getElementById('answerA');
const B = document.getElementById('answerB');
const C = document.getElementById('answerC');
const D = document.getElementById('answerD');
let gameEnd = document.getElementById('gameEnd');
let playerTime = document.getElementById('playerTime');
let allRandomQuestions;




//These are the quiz questions and answers
const quizQuestions = [
  {
    question: 'Which HTML element represents all of the visible content shown to the user?',
    A: 'The &lt;head&gt; element',
    B: 'The &lt;meta&gt; element',
    C: 'The &lt;style&gt; element',
    D: 'The &lt;body&gt; element',
    correct: 'The &lt;body&gt; element',
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
    question: 'The correct anwers is D',
    A: 'This is the first option',
    B: 'This is the second option',
    C: 'This is the third option',
    D: 'This is the fourth option',
    correct: 'This is the fourth option',
  },
  // {
  //   question: 'This is a question',
  //   A: 'This is the first option',
  //   B: 'This is the second option',
  //   C: 'This is the third option',
  //   D: 'This is the fourth option',
  //   correct: '',
  // },
  // {
  //   question: 'This is a question',
  //   A: 'This is the first option',
  //   B: 'This is the second option',
  //   C: 'This is the third option',
  //   D: 'This is the fourth option',
  //   correct: '',
  // },
  // {
  //   question: 'This is a question',
  //   A: 'This is the first option',
  //   B: 'This is the second option',
  //   C: 'This is the third option',
  //   D: 'This is the fourth option',
  //   correct: '',
  // },
  // {
  //   question: 'This is a question',
  //   A: 'This is the first option',
  //   B: 'This is the second option',
  //   C: 'This is the third option',
  //   D: 'This is the fourth option',
  //   correct: '',
  // },
  // {
  //   question: 'This is a question',
  //   A: 'This is the first option',
  //   B: 'This is the second option',
  //   C: 'This is the third option',
  //   D: 'This is the fourth option',
  //   correct: '',
  // },
  // {
    //   question: 'This is a question',
    //   A: 'This is the first option',
    //   B: 'This is the second option',
    //   C: 'This is the third option',
    //   D: 'This is the fourth option',
    //   correct: '',
  // },
  // {
    //   question: 'This is a question',
    //   A: 'This is the first option',
    //   B: 'This is the second option',
    //   C: 'This is the third option',
    //   D: 'This is the fourth option',
    //   correct: '',
    // },
  ]
  
  

//Below is the timer function 
function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = ' Time Remaining:' + ' ' + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = 'GAME OVER';
      clearInterval(timeInterval);
    }
  }, 1000);
}
  

//Below enables functionality for the 'start quiz' button
startBtn.addEventListener('click', function(){
  countdown();
  allRandomQuestions = shuffleQuestions(quizQuestions);
  quiz.classList.remove('hide');
  menu.classList.add('hide');
  timerEl.classList.remove('hide');
  askQuestion();
});
  

  //Function below shuffles anything put into it.
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
};


//This function asks the questions
function askQuestion() {

  //let currentQuestion = allRandomQuestions[0];
  let currentQuestion = allRandomQuestions[index];
  if (index >= quizQuestions.length) {
  quiz.classList.add('hide');
  gameEnd.classList.remove('hide');
  clearInterval(timeInterval);
  playerTime.textContent = 'Final Time:' + ' ' + timeLeft + ' ' + 'seconds!';
   return
  };

  document.getElementById('questions').innerHTML = currentQuestion.question;
  document.getElementById('answerA').innerHTML = currentQuestion.A;
  document.getElementById('answerB').innerHTML = currentQuestion.B;
  document.getElementById('answerC').innerHTML = currentQuestion.C;
  document.getElementById('answerD').innerHTML = currentQuestion.D;
};


// These enable functionality for the answer buttons in the quiz
A.addEventListener('click', function(){
  if(allRandomQuestions[index].A === allRandomQuestions[index].correct) {
    index++;
    askQuestion();
  }
  else {
    timeLeft--;
    index++;
    askQuestion();
  }
});

B.addEventListener('click', function(){
if(allRandomQuestions[index].B === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft--;
    index++;
    askQuestion();
  }
});

C.addEventListener('click', function(){
  if(allRandomQuestions[index].C === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft--;
    index++;
    askQuestion();
  }
});

D.addEventListener('click', function(){
  if(allRandomQuestions[index].D === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft--;
    index++;
    askQuestion();
  }
});



  
  


