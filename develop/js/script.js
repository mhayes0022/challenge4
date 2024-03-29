let timerEl = document.getElementById('countdown');
let timeLeft = 60;
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
let playerTime = document.getElementById('playerTime');
let restartBtn = document.getElementById('restartBtn');
let scoreSubmission = document.getElementById('scoreSubmission');
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
    question: '              What is a promise?              ',
    A: 'An object with an else method',
    B: 'An object with a then method',
    C: 'A method with a then object',
    D: 'An object with an if method',
    correct: 'An object with a then method',
  },
  {
    question: 'To style an element directly in the HTML file, what is used?',
    A: 'CSS',
    B: 'CSS Box Model',
    C: 'Internal CSS',
    D: 'Inline CSS',
    correct: 'Inline CSS',
  },
  {
    question: 'Which Git command stages your changes?',
    A: 'git checkout -b',
    B: 'git add -A',
    C: 'git add -a',
    D: 'git pull origin main',
    correct: 'git add -A',
  },
  {
    question: 'In CSS, the margin indicates:',
    A: 'How much space we want around the inside of an element',
    B: 'How much space we want around the outside of an element',
    C: 'How much space we want to the top and bottom of an element',
    D: 'How much space we want to the outside of the right and left of an element',
    correct: 'How much space we want around the outside of an element',
  },
  {
    question: 'What is the selector for an id attribute in a CSS stylesheet?',
    A: '#',
    B: '.idName',
    C: '.className',
    D: 'idAttribute',
    correct: '#',
  },
  {
    question: 'Which of the following is NOT a valid kind of type?',
    A: 'String',
    B: 'Boolean',
    C: 'Undefined',
    D: 'Element',
    correct: 'Element',
  },
  {
    question: 'What is an array?',
    A: 'Multiple values stored in a single element',
    B: 'A value stored within a variable',
    C: 'Multiple values stored in a single variable',
    D: 'A value stored across multiple variables',
    correct: 'Multiple values stored in a single variable',
  },
  {
      question: 'What is a function?',
      A: 'A reusable block of code that performs a specific task',
      B: 'A reusable block of code that does nothing',
      C: 'A one-use-only block of code that performs a specific task',
      D: 'A reusable block of code',
      correct: 'A reusable block of code that performs a specific task',
  },
  {
      question: 'A variable must be declared in which type of scope for it to be available to all functions?',
      A: 'Universal scope',
      B: 'Local scope',
      C: 'Global scope',
      D: 'Open scope',
      correct: 'Global scope',
    },
];



//Below is the timer function 
function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = ' Time Remaining:' + ' ' + timeLeft;
      --timeLeft;
    } else {
      timerEl.classList.add('hide');
      clearInterval(timeInterval);
      youDied();

    }
  }, 1000);
}


//Below enables functionality for the 'start quiz' button
startBtn.addEventListener('click', function () {
  countdown();
  timerEl.classList.remove('hide');
  allRandomQuestions = shuffleQuestions(quizQuestions);
  menu.classList.add('hide');
  quizSection.classList.remove('hide');
  quizSection.classList.add('flex');
  askQuestion();
});


//Function below shuffles anything put into it
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

  let currentQuestion = allRandomQuestions[index];
  //Below handles when all questions have been answered
  if (index >= quizQuestions.length) {
    quizSection.classList.add('hide');
    quizSection.classList.remove('flex');
    scoreSubmission.classList.remove('hide');
    timerEl.classList.add('hide');
    clearInterval(timeInterval);
    playerTime.textContent = 'Final Time:' + ' ' + timeLeft + ' ' + 'seconds!';
    return
  };

  //Below grabs the questions and answer buttons
  document.getElementById('questions').innerHTML = currentQuestion.question;
  document.getElementById('answerA').innerHTML = currentQuestion.A;
  document.getElementById('answerB').innerHTML = currentQuestion.B;
  document.getElementById('answerC').innerHTML = currentQuestion.C;
  document.getElementById('answerD').innerHTML = currentQuestion.D;
};



// The below four functions (A, B, C, D) enable functionality for the answer buttons in the quiz
A.addEventListener('click', function () {
  if (allRandomQuestions[index].A === allRandomQuestions[index].correct) {
    index++;
    askQuestion();
  }
  //The else statements handle if the answer is incorrectly answered
  else {
    timeLeft -= 5;
    index++;
    askQuestion();
  }
});

B.addEventListener('click', function () {
  if (allRandomQuestions[index].B === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft -= 5;
    index++;
    askQuestion();
  }
});

C.addEventListener('click', function () {
  if (allRandomQuestions[index].C === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft -= 5;
    index++;
    askQuestion();
  }
});

D.addEventListener('click', function () {
  if (allRandomQuestions[index].D === allRandomQuestions[index].correct) {
    index++;
    askQuestion()
  }
  else {
    timeLeft -= 5;
    index++;
    askQuestion();
  }
});



//Below is the high score section
let highScoreSection = document.getElementById('highScoreSection');
let highScoresBtn = document.getElementById('highScoresBtn');
let submittedScore = document.getElementById('highScoreInitials');
let highscoresContainer = document.getElementById('scoresList')
let highScoreInitials = document.getElementById('highScoreInitials');
let submitScoreBtn = document.getElementById('submitScoreBtn');
let playAgain = document.getElementById('playAgain');
let scores;
let finalTime;


//Below enables 'high score' button functionality and style changes
highScoresBtn.addEventListener('click', function () {
  highScoresBtn.disabled = true;
  quizSection.classList.remove('flex');
  quizSection.classList.add('hide');
  menu.classList.add('hide');
  scoreSubmission.classList.add('hide');
  timerEl.classList.add('hide');
  highScoreSection.classList.remove('hide');
  highScoreSection.classList.add('flex');
  restartBtn.classList.remove('hide');
  highScoreSection.classList.add('paddingTop');
  clearInterval(timeInterval);
  displayScores();
});


//Below is the restart quiz button
restartBtn.addEventListener('click', function () {
  location.reload();
});


//Below handles retrieving the high scores
let savedHighScores = JSON.parse(localStorage.getItem("highScoreSection")) || [];

//Below loops over high score items and creates list items with them
const displayScores = () => {
  savedHighScores.sort((a, b) => b.score - a.score);
  savedHighScores.forEach((item) => {
    const initials = document.createElement("li");
    initials.innerHTML = item.initials + ': ' + item.score;
    highscoresContainer.appendChild(initials);
  });
};

//Below enables functionality of 'submit' score button
submitScoreBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  if (submittedScore.value == "" || submittedScore.value == null) {
    alert("You have not entered anything");
    return;
  }
  const userScore = {
    initials: submittedScore.value,
    score: timeLeft,
  }

  savedHighScores.push(userScore);

  localStorage.setItem('highScoreSection', JSON.stringify(savedHighScores));
  displayScores()
  highScoreSection.classList.remove('hide');
  highScoreSection.classList.add('paddingTop');
  scoreSubmission.classList.add('hide');
  menu.classList.add('hide');
  restartBtn.classList.remove('hide');
});


//Below handles if timer runs out
function youDied() {
  quizSection.classList.remove('flex');
  quizSection.classList.add('hide');
  highScoresBtn.classList.add('hide');
  playAgain.classList.remove('hide');
  dead.classList.remove('hide');
};
//Below is a restart button specifally for the 'You died' screen
playAgain.addEventListener('click', function () {
  location.reload();
});



