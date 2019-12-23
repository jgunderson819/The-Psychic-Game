
  // Creates an array that lists out all of the options.
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Creating variables to hold the number of wins, losses, and guesses. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// Create variables that hold references to the places in the HTML where we want to display things.

var directionsText = GetElementById("directions-text")
var winsText = GetElementById("wins-text")
var lossesText = GetElementById("losses-text")
var guessesleft = GetElementById("guessesleft-text")
var guessessofarText = GetElementById("guessessofar-text")


 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessessofarText.push(userGuess)

    // This logic determines the outcome of the game (win/loss/another guess), and increments the appropriate number
    if userGuess === computerGuess; wins++:


    else
        alert("Try again")
   
      // Hide the directions
      directionsText.textContent = "";

      // Display the wins, losses guesses left, and guesses so far
     winsText =  "Wins  " + wins
     lossesText = "Losses  " + losses
     guessesleftText = " Guesses Left  " + (guessesleft -(GuessessoFar.length))
    
    
  };
var computer = Math.floor(Math.random() * 26);



for (i=1; i<11; i++) 
document.onkeyup = function(event) {
var userguess = alert "What is your guess"

function myfunction 
if  userguess == choices(computer) {

document.write ("You Win!");
wins++;

else
guesses++;
document.write ("Try again");

}

document.write ("You lose!");
losses++



}