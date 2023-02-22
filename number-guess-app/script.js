const input = document.getElementById("guess");
const guessButton = document.getElementById("guess-btn");
const restartButton = document.getElementById("restart-btn");
const triedGuess = document.querySelector(".tried-guess");
const guessedNumber = document.querySelector(".guessed-number");
const msg1 = document.querySelector(".msg1");

let answer = Math.floor(Math.random() * 100) + 1;
let guessTime = 0;
let guessedNums = [];

guessButton.addEventListener("click", guessNumber);
input.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		guessNumber();
	}
});

function guessNumber(e) {
	// Take Input Value
	const userGuess = input.value;
	// Enter a between 1 and 100.
	if (userGuess < 1 || userGuess > 100) {
		alert("Please enter a number between 1 and 100.");
	} else {
		guessedNums.push(userGuess);
		guessTime += 1;
	}

	// If user guess lower then answer give this hint
	if (userGuess < answer) {
		msg1.textContent = "Your guess is too low";
		triedGuess.textContent = "Tried Guess: " + guessTime;
		guessedNumber.textContent = "Guessed numbers are:" + guessedNums;
	}

	// If user guess high then answer give this hint

	if (userGuess > answer) {
		msg1.textContent = "Your guess is too high";
		triedGuess.textContent = "Tried Guess: " + guessTime;
		guessedNumber.textContent = "Guessed numbers are: " + guessedNums;
	}

	// If user guess the answer

	if (userGuess == answer) {
		alert("Your guess is correct! You Win!");
		msg1.textContent = "Your guess is correct! You Win!";
		triedGuess.textContent = "The number was: " + answer;
		guessedNumber.textContent = "Guessed numbers are: " + guessedNums;
		restartButton.style.display = "flex";
	}

	// Restart Page

	restartButton.addEventListener("click", function () {
		location.reload();
	});
}
