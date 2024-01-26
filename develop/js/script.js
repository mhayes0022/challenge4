var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = ' Time Remaining:' + ' ' + timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = 'GAME OVER';
        clearInterval(timeInterval);
      }
    }, 1000);
}
  countdown();