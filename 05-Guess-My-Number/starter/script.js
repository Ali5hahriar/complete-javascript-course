'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent  = 'Correct Number';

document.querySelector('.number').textContent = 14;

document.querySelector('.guess').value = 53;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess > secretNumber ) {
    if (score > 0) {

    document.querySelector('.message').textContent = 'Too high...';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {

    document.querySelector('.message').textContent = 'Too low...';
    score--;

    document.querySelector('.score').textContent = score;
  } else {

    document.querySelector('.message').textContent = 'You Winnn!...';
  };
  }});
