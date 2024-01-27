var timerEl = document.getElementById('countdown');
var timeLeft = 5;
var timeInterval;
var startBtn = document.getElementById('startBtn');
var menu = document.getElementById('menu');
var quiz = document.getElementById('quiz')

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
  });


