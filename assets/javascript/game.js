var letters= ['a','b','c','d','e',]
var counter= 9;
    if (counter != 0) {
        var compGuess = letters[Math.floor(Math.random() * letters.length)];
            console.log("Computers key:", compGuess);
        document.onkeyup = function(event){
            var userGuess= event.key.toLocaleLowerCase();
            console.log("keypressed:", userGuess);
            if(compGuess === userGuess){
                alert("Good Guess");
            } else {
                counter -= 1; 
                console.log("Guesses left", counter);
                alert("Try again!");

            }
        }
    } else {
        alert("You Lost! Try again");
    }