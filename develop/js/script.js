let timerEl = document.getElementById('countdown');
let timeLeft = 30;
let timeInterval;
let startBtn = document.getElementById('startBtn');
let menu = document.getElementById('menu');
let quiz = document.getElementById('quiz');
let quizSection = document.getElementById('quizSection')
let questions = document.querySelector('questions');
let index = 0;
let answersBtns = document.getElementById('answerBtns');
const A = document.getElementById('answerA');
const B = document.getElementById('answerB');
const C = document.getElementById('answerC');
const D = document.getElementById('answerD');
let scoreSubmission = document.getElementById('scoreSubmission');
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
  // {
  //   question: 'To style an element directly in the HTML file, what is used?',
  //   A: 'CSS',
  //   B: 'CSS Box Model',
  //   C: 'Internal CSS',
  //   D: 'Inline CSS',
  //   correct: 'Inline CSS',
  // },
  // {
  //   question: 'Which Git command stages your changes?',
  //   A: 'git checkout -b',
  //   B: 'git add -A',
  //   C: 'git add -a',
  //   D: 'git pull origin main',
  //   correct: 'git add -A',
  // },
  // {
  //   question: 'In CSS, the margin indicates:',
  //   A: 'How much space we want around the inside of an element',
  //   B: 'How much space we want around the outside of an element',
  //   C: 'How much space we want to the top and bottom of an element',
  //   D: 'How much space we want to the outside of the right and left of an element',
  //   correct: 'How much space we want around the outside of an element',
  // },
  // {
  //   question: 'What is the selector for an id attribute in a CSS stylesheet?',
  //   A: '#',
  //   B: '.idName',
  //   C: '.className',
  //   D: 'idAttribute',
  //   correct: '#',
  // },
  // {
  //   question: 'Which of the following is NOT a valid kind of type?',
  //   A: 'String',
  //   B: 'Boolean',
  //   C: 'Undefined',
  //   D: 'Element',
  //   correct: 'Element',
  // },
  // {
  //   question: 'What is an array?',
  //   A: 'Multiple values stored in a single element',
  //   B: 'A value stored within a variable',
  //   C: 'Multiple values stored in a single variable',
  //   D: 'A value stored across multiple variables',
  //   correct: 'Multiple values stored in a single variable',
  // },
  // {
  //     question: 'What is a function?',
  //     A: 'A reusable block of code that performs a specific task',
  //     B: 'A reusable block of code that does nothing',
  //     C: 'A one-use-only block of code that performs a specific task',
  //     D: 'A reusable block of code',
  //     correct: 'A reusable block of code that performs a specific task',
  // },
  // {
  //     question: 'A variable must be declared in which type of scope for it to be available to all functions?',
  //     A: 'Universal scope',
  //     B: 'Local scope',
  //     C: 'Global scope',
  //     D: 'Open scope',
  //     correct: 'Global scope',
  //   },
  ];
  
  

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
  quizSection.classList.remove('hide');
  menu.classList.add('hide');
  timerEl.classList.remove('hide');
  quizSection.classList.add('flex');
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
  quizSection.classList.add('hide');
  quizSection.classList.remove('flex');
  scoreSubmission.classList.remove('hide');
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


//Below is the high score section
let highScoreSection = document.getElementById('highScoreSection');
let highScoresBtn = document.getElementById('highScoresBtn');

highScoresBtn.addEventListener('click', function(){
  quizSection.classList.remove('flex');
  highScoreSection.classList.remove('hide');
  scoreSubmission.classList.add('hide');
  quizSection.classList.add('hide');
  menu.classList.add('hide');
  clearInterval(timeInterval);
});



  
//Still needs:
//subtract more than 1 second off if incorrect answer
//'submit' button needs to take you to high score screen
//contingency for if timer runs out
//incorrect answers take time off your score time, but not the timer
//set timer to 60 seconds to start
//what if menu is present when high score button is clicked
