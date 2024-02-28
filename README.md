# 04 Web APIs: Code Quiz

## Page Description
This is a coding quiz.

The main screen of the page reads "Coding Quiz" and has a button beneath it that says "Start Quiz!". There is a second button, which reads "High Scores" at the top left corner. If you click on the "Start Quiz!" button, the main screen disappears and the quiz section of the application takes its place. 

At the top right corner of the quiz section is a timer which begins counting down from 60 seconds after you click the "Start Quiz!" button. The quiz section contains ten questions, which it will display one at a time. It randomly shuffles the questions, so each playthrough of the game will result in a different question order. Below each question are four buttons, each with a possible answer to the question posed. When you choose an answer, the application displays the next question. If you chose the wrong answer, it will subtract five seconds off of the time remaining. If you chose correctly, you're given the next question and the timer continues to count down at one second increments as before.

When all the questions have been asked and answers have been submitted for each, you are taken to a display which reads "Final Time:" and will tell you how many seconds you had left on the 60 second countdown timer when you finished the quiz. Below that is a submission bar and button, where it prompts you to enter your initials. When you do so, you are taken to another screen which shows the top five scores in order. The scores are stored in local data. Below the high scores display is a "Restart Quiz!" button, which will take you back to main screen and allow you to replay the quiz.

If the timer is allowed to run to zero, the screen will turn to black and the words "YOU DIED" will fade in. In the top right hand corner is a small "restart quiz" button. 

## Website Link
https://mhayes0022.github.io/challenge4/

## Website Screenshot
![Coding Quiz main](https://github.com/mhayes0022/challenge4/assets/153241703/5aefe8c8-23c1-4da0-bd11-0bb40d08fc66)

![Coding Quiz quiz](https://github.com/mhayes0022/challenge4/assets/153241703/99a640ec-0bbc-4262-942b-167a8b572827)

![Coding Quiz final](https://github.com/mhayes0022/challenge4/assets/153241703/7dcadd82-4724-4ed7-9c29-9129082aecb3)

![Coding Quiz high scores](https://github.com/mhayes0022/challenge4/assets/153241703/111b8de9-2acd-4990-8cb3-8b6d025c05e6)

## Credits
All of the code was written by me. However, a tutor through the University of Minnesota provided some very helpful guidance and helped substantially with the submitScoreBtn event listener in JavaScript, and to clean up the displayScores function. Additionally, a friend helped me figure out how to get the questions to shuffle properly. 

## License 

MIT License

Copyright (c) 2023 mhayes0022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
