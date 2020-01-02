 // Create choices array for computer choices
  var computerChoices = ["a","b","c","d","e","f","g","h","i","j",'k','l',"m","n","o","q","p","r","s","t","u","v","w","x","y","z"];
 //Assign variables that I will be using

  
  var wins = 0;
  var losses = 0;
  var guessesRemaining = 10;
  var guessessoFar = [];
  var computerPick

  

  // Starting displays for the game
  function display() {
 var displayer = "<p>Wins:  " + wins +"</p>" +
            "<p>Losses:  " + losses + "</p>" +
            "<p>Guesses Left:  " + guessesRemaining + "</p>" +
            "<p>Guesses so far:  " + guessessoFar.toString() + "</p>"

            document.querySelector("#game").innerHTML = displayer
  }

  //  Functions

  // Computer makes random selection 
  function computerSelect() {
  var computerPick = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  }

  function winGame() {
    wins++;
    document.write ("You won, let's play again");
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

      var userGuess = event.key.toLowerCase();
      guessessoFar.push(userGuess)
   
      console.log(computerPick)
      
      if (userGuess == computerPick) {
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