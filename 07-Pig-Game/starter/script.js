'use strict';
// Storing all the needed variables
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new'); 
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold = document.querySelector('.btn--hold'); 
let currentScore = 0;

// Starting condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// Rolling the dice functionality
btnRoll.addEventListener('click', function() {
    // Generate a random dice roll
    const randNumber = Math.trunc(Math.random() * 6) + 1;

    // Display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${randNumber}.png`;

    // Check the dice roll condition
    if (dice !== 1) {
        // Add the dice to the current score
        currentScore += randNumber;
        current0.textContent = currentScore;

    } else {
        // Switch to the next player

    }
})