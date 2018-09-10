//Create an array of alphabets
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Select a random Alphabet from the Array
var compAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
console.log(compAlphabet);


var guessedAlphabet = [];
var wins = 0;
var losses = 0;
var guesses = 9;


document.onkeyup = function (event) {

    var userGuess = event.key;
    if (userGuess === compAlphabet) {
        wins++;
        
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses = 9;
        compAlphabet;
    } 

    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('lossCount').innerHTML = losses;
    document.getElementById('guessCount').innerHTML = guesses;
    document.getElementById('guessedAlphabet').innerHTML = guessedAlphabet;
}

// function resetGame() {
//     var guesses = 9;
//     var compAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
//     return(compAlphabet);
// }

// // You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// // Guess what letter I'm thinking of
// // Wins: (# of times the user has guessed the letter correctly)


// // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// // Guesses Left: (# of guesses left. This will update)

// guessCount: var guessCounter = function(guessCount){

// for (var i = 9; i > 1; i-=1) {
// 	guesses[i]
//     }

// }
// // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// winCount: var winCounter = function(winCount){

//     if ((userGuess === compAlphabet)) {
//     for (var j = 0; j < 1; j++){
//     wins + 1;
//         console.log(wins);
//     } else guessCounter;
// }
// }
// // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
// lossCount: var lossCounter = function(lossCount){
//     for (var k = 0; k < 1; k++){
//          = 
//     }
// }

// // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)


