
  // Creates an array that lists out all of the options.
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Creating variables to hold the number of wins, losses, and guesses. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// Create variables that hold references to the places in the HTML where we want to display things.

var directionsText = "Pick a letter"
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var guessessoFarText = document.getElementById("guessessofar-text");
var i;
var userGuess;
var computerGuess;
var guessessoFar

 // This function is run whenever the user presses a key.
 for (i=1; i < 11; i++) {
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random()) * (computerChoices.length)]
   
    guessessoFarText.push(userGuess)};

    // This logic determines the outcome of the game (win/loss/another guess), and increments the appropriate number
    if (userGuess === computerGuess) {
     wins++;

    }
    else  {
        alert("Try again");
   
    }

      // Hide the directions
      directionsText =  document.getElementById("directions-text").innerHTML = "";
     // directionsText.textContent = "";

      // Display the wins, losses guesses left, and guesses so far
    var html =
    "<p> Wins " + wins + "</p>"
    "<p> Losses " + losses + "</p>"
    "<p> Guesses Left "+ (10-i) + "</p>"
    "<p> Guesses So Far " + document.getElementById(guessessofar-text).innerHTML = guessessoFarText + "</p>"

    document.getElementById.innerHTML = html;
  };


