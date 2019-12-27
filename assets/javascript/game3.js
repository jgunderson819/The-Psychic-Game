var game = {

    computerChoices : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    wins : 0,
    losses : 0,
    guesses : 10,
    guessessoFarText : []
}
 // Computer randomly chooses from options array, saved in variable
    num =Math.floor(Math.random()*[game.computerChoices.length])
    computerGuess = game.computerChoices[num]


 // Functions

  function startGame() {
  document.getElementById("wins-text").innerHTML = "Wins:  " + game.wins;
  document.getElementById("losses-text").innerHTML = "Losses:  " + game.losses;
  document.getElementById("guessesleft-text").innerHTML = "Guesses Left " + game.guesses;
  document.getElementById("guessessofar-text").innerHTML = "Guesses So Far: " + game.GuessessoFarText.toString();
 }

 function winGame() {
    game.wins++
    game.guesses = 10
    game.guessessoFarText = []
    document.getElementById("wins-text") = "Wins:  " + game.wins
    document.getElementById("guessesleft-text") = game.guesses;
    document.getElementById("guessessofar-text") = game.guessessoFarTextguessessoFarText
    return "You win"
  }    



 function loseGame() {
  game.losses++
  game.guesses = 10
  game.guessessoFarText = []
  document.getElementById("wins-text") = "Wins:  " + game.wins
  document.getElementById("losses-tex") = "Losses:  " + game.losses
  document.getElementById("guessesleft-text") = "Guesses Left:  "  + (game.guesses)
  document.getElementById("guessessofar-text") = "Guesees So Far:  " + game.guessessoFarText.toString()
 }

 //This function runns whenever the user presses a key
document.onkeyup = function (event) {

var userGuess = event.key.toLowerCase();
  
 if (userGuess === computerGuess) {
  winGame();
 }
 else {
  game.guesses--
  document.getElementById("wins-text") = "Wins:  " + game.wins
  document.getElementById("losses-tex") = "Losses:  " + game.losses
  document.getElementById("guessesleft-text") = "Guesses Left:  "  + (game.guesses)
  document.getElementById("guessessofar-text") = "Guesees So Far:  " +game.guessessoFarText.toString()
  if (game.guesses < 1) {loseGame()}
 }
 };





 
