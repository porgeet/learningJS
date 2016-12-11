/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


////////////////////////////////////////////////////////////////
// Lecture 1

// Create fundemental game variables
// Generate random numbers
// Manipulate the DOM
// Read from the DOM
// Change CSS styles

var scores, roundScore, activePlayer, gamePlaying;

init();

// Lecture 2

// Set up event handler
// What a callback function is
// What an anonymous function is
// Another way to select elements by id
// How to change and image in the <img> element

document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		//1. random number
		var dice = Math.floor(Math.random() * 6) + 1;

		//2. display result

		var diceDOM = document.querySelector('.dice'); 
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		//3. update the score IF the rolled number was NOT a 1
		if(dice !== 1){
			// Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			nextPlayer();
		
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying){
		// Add current score to global score
		scores[activePlayer] += roundScore;
		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		// Check if player won the game

		if(scores[activePlayer] >= 20) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}	
	}
	
});

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;	
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

// Lecture 3
// What the ternary operator is (switch statement)
// Hot to add and remove HTML classes

// Lecture 4
// How to use functions to correctly apply DRY principle
// How to think about game logic like a programmer

// Lecture 5
// Practice, pactice, practice

// Lecture 6
// What a state variable is, how to use it and why

