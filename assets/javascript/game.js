// The array the computer uses to randomly select a letter from the alphabet
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Creating variables to hold the number of wins, losses, guesses left.
var wins = 0;
var losses = 0;
var guessesRem =9;
var guesses = [];


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsPrompt = document.getElementById("direction-prompt");
var winsText = document.getElementById("wins-count");
var losesText = document.getElementById("loses-count");
var guessleftText = document.getElementById("guesses-left");
var guessAttText = document.getElementById("guess-attempts");

console.log(winsText);

// Function that is run whenever a user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userChoice = event.key;

    // Pushes the users input to the empt array
    guesses.push(userChoice);

    // The computer randomly chooses an option from the "ComputerChoices" array.
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    // This resets the the guesses when there's been 10 made or the correct one is chosen.
    var resetGuess = function() {
        guessesRem = 9;
    }


    // This logic determines the outcome of the game (wins, losses, and the number of guesses)


    if ((userChoice === computerGuess) && (guessesRem > 0)) {

        wins++;
        resetGuess();
        guesses = [];

    } else if ((userChoice !== computerGuess ) && (guessesRem > 0)) {

        guessesRem--;

    } else if (guessesRem === 0) {
        resetGuess();
        losses++;
        guesses = [];
    }

    
    
    winsText.textContent = "Wins: " + wins;
    losesText.textContent = "Losses: " + losses;
    guessleftText.textContent = "Guesses Left: " + guessesRem;
    guessAttText.textContent = "Your Guesses so far: " + guesses.join(", ");



}
   

