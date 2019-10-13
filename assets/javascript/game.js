var letters= ['a','b','c','d','e',]
var counter= 9;
var wins = 0;
var losses = 0;
    Loop1:
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("Computers key:", compGuess);
        document.onkeyup = function(event){
        var userGuess= event.key.toLocaleLowerCase();
        console.log("keypressed:", userGuess);
        if(compGuess === userGuess){
            wins ++;
            alert("Good Guess");
            console.log("wins:", wins);
            continue Loop1;
        } else if (counter == 0) {
            alert("Your out of guesses! The answer was: " + compGuess);
        } else {
            counter -= 1; 
            console.log("Guesses left", counter);
            alert("Try again!");

        }
    }


