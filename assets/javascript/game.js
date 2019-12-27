 // Create choices array for computer choices
  var computerChoices = ["a","b","c","d","e","f","g","h","i","j",'k','l',"m","n","o","q","p","r","s","t","u","v","w","x","y","z"];
 //Assign variables that I will be using

  var num =Math.floor(Math.random()*computerChoices.length);
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;
  var guessessoFar = [];
  // Computer makes random selection
  var ComputerPick = computerChoices[num];

  // Starting displays for the game
  document.getElementById("directions-text").innerHTML = "Pick a letter";
    function display() {
    document.getElementById(wins-text).innerHTML = "Wins:  " + wins;
    document.getElementById("losses-text").innerHTML = "Losses:  " + losses;
    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + GuessesRemaining;
    document.getElementById("guessessofar-text").innerHTML = "Guesses so far: " + GuessessoFar;
    }

  //  Functions

  function winGame() {
    wins++;
    document.getElementById("directions-text").innerHTML = "You won, let's play again";
    var guessessoFar = [];
    display()
  }

  function loseGame() {
    losses++;
    guessesRemaining = 10
    guessessoFar = []
    display()
  }

  //This function runs whenever user presses a key
    document.onkeyup = function(event) {

      var userGuess = event.key.toLowerCase()
      guessessoFar.push(userGuess)

      console.log (userGuess)
      console.log(guessessoFar)
      console.log(computerPick)
      console.log (num)
      if (userGuess === computerPick) {
        winGame();
      }
      else {
        guessesRemaining--;
        display();
      }
        if (guessesRemaining < 1) {loseGame()}
      
    }