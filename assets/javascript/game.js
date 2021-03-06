//Create an array of alphabets
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Select a random Alphabet from the Array
var compAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
console.log(compAlphabet);

var wins = 0;
var losses = 0;
var guesses = 9;



//function to start the game when the user presses any key on the keyboard
document.onkeypress = function (event) {

    //When user presses a key and it matches the randomly selected alphabet, increase the win count.
    var userGuess = event.key;

    if (userGuess === compAlphabet) {
        wins++;
        guesses--;

        //If user's guess is incorrect, decrease the guess count
    } else {
        guesses--;
    }

    //When guess count reaches 0 add to Losses & reset the guess count to 9.
    if (guesses === 0) {
        losses++;
        guesses = 9;
    }

    //loop through the user's input & display it.
    for (var j = 0; j < 9; j++) {
        console.log(userGuess);
        var userEnter = $("<guessedLetter>");
        userEnter.addClass("alpha")
        userEnter.attr("data-letter", j[j])
        userEnter.text(j[j]);
        console.log(j);
        $("guessedAlphabet").append(userEnter)
    }

//I tried to add each alphabet entered by the user, but no luck :(  I can display the most recent alphabet entered by the user though.
    $("#guessedAlphabet").on("keyup", function () {
        var guessedAlpha = $("<div>")
        guessedAlpha.addClass("letter")
        guessedAlpha.text($(this).attr("data-letter"))
        $("guessedAlphabet".append(guessedAlpha))
        console.log(guessedAlpha);
    })

    //reset the user's guessed alphabet when it is 9
    if (userGuess === 9) {
        $("#guessedAlphabet").empty();
    }

    //display the wins, losses & number of guesses left
    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('lossCount').innerHTML = losses;
    document.getElementById('guessCount').innerHTML = guesses;
}