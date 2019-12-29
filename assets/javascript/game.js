 // Create choices array for computer choices
  var computerChoices = ["a","b","c","d","e","f","g","h","i","j",'k','l',"m","n","o","q","p","r","s","t","u","v","w","x","y","z"];
 //Assign variables that I will be using

  
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;
  var guessessoFar = [];
  // Computer makes random selection

  function computerSelect() {
    var computerPick = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  }
// Run the computerSelect function
  computerSelect()
  
  console.log(computerPick)
  // Starting displays for the game
  document.getElementById("directions-text").innerHTML = "Pick a letter";
    function display() {
    document.getElementById("wins-text").innerHTML = "Wins:  " + wins;
    document.getElementById("losses-text").innerHTML = "Losses:  " + losses;
    document.getElementById("guessesleft-text").innerHTML = "Guesses Left: " + GuessesRemaining;
    document.getElementById("guessessofar-text").innerHTML = "Guesses so far: " + GuessessoFar;
    } display()

  //  Functions

  function winGame() {
    wins++;
    document.getElementById("directions-text").innerHTML = "You won, let's play again";
    guessessoFar = [];
    computerSelect()
  }

  function loseGame() {
    losses++;
    guessesRemaining = 10
    guessessoFar = []
    computerSelect()
  }

  //This function runs whenever user presses a key
    document.onkeyup = function(event) {

      var userGuess = string.fromCharCode.toLowerCase();
      guessessoFar.push(userGuess)

      console.log (userGuess)
      console.log(guessessoFar)
    
      console.log (num)
      if (userGuess === computerPick) {
        winGame();
      }
      else {
        guessesRemaining--;
        display();
      }
        if (guessesRemaining < 1) {
          loseGame()
          }
          else {display()
          }
        }